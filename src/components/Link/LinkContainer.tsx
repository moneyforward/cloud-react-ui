import { useState, useEffect, useCallback } from "react";
import { LinkPresenter } from "./LinkPresenter";

export type LinkProps = {
  href?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  disabled?: boolean;
  isEnabledOnlyOnceClick?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className?: string;
  // for Rails
  remoteModal?: boolean;
  method?: "get" | "post" | "put" | "patch" | "delete";
};

export const LinkContainer: React.FC<LinkProps> = ({
  href,
  target,
  disabled: defaultDisabled = false,
  isEnabledOnlyOnceClick = false,
  onClick,
  className,
  remoteModal,
  method,
  ...rest
}) => {
  const classNames = className ? className.split(" ") : [];
  if (remoteModal) {
    classNames.push("js-show-remote-modal");
  }

  const [disabled, setDisabled] = useState(defaultDisabled);
  useEffect(() => {
    setDisabled(defaultDisabled);
  }, [defaultDisabled]);

  const handleClick = useCallback(
    (e) => {
      if (!disabled) {
        onClick && onClick(e);
      }
      if (isEnabledOnlyOnceClick) {
        setDisabled(true);
      }
    },
    [isEnabledOnlyOnceClick, disabled, onClick]
  );

  return (
    <LinkPresenter
      href={href}
      target={target}
      disabled={disabled}
      // hrefに'#'を指定したときはonClickでpreventDefaultすることによって何も動作しないようにする
      onClick={href === "#" ? (e) => e.preventDefault() : handleClick}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={classNames.length > 0 ? classNames.join(" ") : undefined}
      // for Rails
      data-remote={remoteModal ? true : undefined}
      data-type={remoteModal ? "html" : undefined}
      data-method={method || undefined}
      {...rest}
    />
  );
};
