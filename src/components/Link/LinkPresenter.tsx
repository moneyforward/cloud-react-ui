import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import { LinkProps } from "./LinkContainer";

type LinkPresenterProps = Omit<
  LinkProps,
  "remoteModal" | "method" | "isEnabledOnlyOnceClick"
> & {
  rel?: string;
  "data-remote"?: boolean;
  "data-type"?: string;
  "data-method"?: LinkProps["method"];
  disabled: boolean;
};

const StyledLink = styled(({ tag: Tag, theme, ...rest }) => (
  <Tag {...rest} />
))<LinkProps>`
  ${({ theme }) => {
    return css`
      display: ${theme.link.display};
      align-items: ${theme.link.alignItems};
      width: ${theme.link.width};
      min-height: ${theme.link.minHeight};
      padding: ${theme.link.padding};
      background-color: ${theme.link.backgroundColor};
      color: ${theme.link.color};
      font-size: ${theme.link.fontSize};
      text-decoration: ${theme.link.textDecoration};

      &:visited {
        color: ${theme.link.visited.color};
        text-decoration: ${theme.link.visited.textDecoration};
      }
      &:focus {
        color: ${theme.link.focus.color};
        text-decoration: ${theme.link.focus.textDecoration};
      }
      &:active {
        color: ${theme.link.active.color};
        text-decoration: ${theme.link.active.textDecoration};
      }
      &:hover {
        cursor: pointer;
        color: ${theme.link.hover.color};
        text-decoration: ${theme.link.hover.textDecoration};
      }
      &.disabled {
        cursor: not-allowed;
        color: ${theme.link.disabled.color};
      }
    `;
  }}
`;
StyledLink.defaultProps = defaultProps;

export function LinkPresenter({
  href,
  target,
  disabled,
  children,
  className,
  ...rest
}: LinkPresenterProps): React.ReactElement {
  if (disabled) {
    return (
      <StyledLink tag="span" className={`${className} disabled`}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledLink
      tag="a"
      href={href}
      terget={target}
      className={className}
      {...rest}
    >
      {children}
    </StyledLink>
  );
}
