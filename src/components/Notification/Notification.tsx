import { forwardRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { defaultProps, color } from "../../theme";

export type NotificationProps = {
  color?: "success" | "warning" | "error";
  className?: string;
  children: React.ReactNode;
  align?: "center" | "left" | "right" | "start" | "end";
  isOpen?: boolean;
  onClickClose?: () => void;
};

const white = color.white;

const StyledNotification = styled.div<
  Omit<NotificationProps, "align" | "children" | "isOpen" | "onClickClose">
>`
  ${({ color = "success", theme: { notification } }) => css`
    width: 100%;
    background-color: ${notification.backgroundColor[color]};
    opacity: 0.9;
    color: ${white};
    font-size: 13px;
  `}
`;
StyledNotification.defaultProps = defaultProps;

const CrossIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="hidden"
  >
    <path
      d="M15 0.714286L14.2857 0L7.50003 6.78568L0.714355 8.70763e-06L6.93137e-05 0.714294L6.78574 7.49997L0 14.2857L0.714286 15L7.50003 8.21426L14.2858 15L15.0001 14.2857L8.21432 7.49997L15 0.714286Z"
      fill="white"
    />
  </svg>
);

const CloseButton = styled.button`
  padding: 12px;
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
`;

const Action = styled.div`
  flex: 0 0;
`;

type ContentProps = {
  children: React.ReactNode;
  align?: NotificationProps["align"];
};

const Content = styled.div<ContentProps>`
  flex: 1 1 auto;
  padding: 12px;
  text-align: ${({ align }) => align};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ children, align, isOpen = false, onClickClose, ...rest }, ref) => {
    const [isActive, setIsActive] = useState(isOpen);
    const handleCloseClick = () => {
      onClickClose && onClickClose();
      setIsActive(false);
    };

    useEffect(() => {
      setIsActive(isOpen);
    }, [isOpen]);

    if (!isActive) {
      return null;
    }

    return (
      <StyledNotification ref={ref} role="alert" {...rest}>
        <Inner>
          <Content align={align}>{children}</Content>
          <Action>
            <CloseButton
              onClick={handleCloseClick}
              aria-label="閉じる"
              type="button"
            >
              <CrossIcon />
            </CloseButton>
          </Action>
        </Inner>
      </StyledNotification>
    );
  }
);

Notification.displayName = "Notification";

export { Notification };
