import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./ButtonContainer";
import { Icon } from "../Icon";
import { defaultProps } from "../../theme";

const StyledButton = styled.button<ButtonProps>`
  ${({ theme, size = "medium", color = "default", disabled }) => {
    const buttonSize = theme.button.size[size];
    const buttonColor = theme.button[disabled ? "disabled" : color];

    return css`
      && {
        display: inline-block;
        height: ${buttonSize.height};
        padding: ${buttonSize.padding};
        line-height: ${buttonSize.height};
        font-size: ${buttonSize.fontSize};
        border-radius: ${theme.button.borderRadius};
        border: ${buttonColor.border};
        color: ${buttonColor.textColor};
        background: transparent;
        cursor: ${disabled ? "not-allowed" : "pointer"};
        position: relative;
        z-index: 0;
      }

      &&:before,
      &&:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        border-radius: ${theme.button.borderRadius};
      }
      &&:before {
        z-index: -1;
        background: ${buttonColor.background};
        transition: opacity 0.2s ease-in-out;
      }
      &&:after {
        content: "";
        z-index: -2;
        background: ${buttonColor.hover.background};
        border-radius: ${theme.button.borderRadius};
      }
      &&:hover {
        &:before {
          opacity: 0;
        }
      }
      &&:active,
      &&:focus,
      &&:visited {
        outline: 0;
        box-shadow: ${buttonColor.active.boxShadow};
      }
    `;
  }}
`;
StyledButton.defaultProps = defaultProps;

const StyledIcon = styled((props) => <Icon {...props} />)`
  ${({ theme, iconPlacement = "start", color = "default", disabled }) => {
    return css`
      && {
        padding-${iconPlacement === "start" ? "right" : "left"}: 4px;
        width: 10px;
        color: ${theme.button[disabled ? "disabled" : color].iconColor};
      }
    `;
  }}
`;
StyledIcon.defaultProps = defaultProps;

export function ButtonPresenter({
  size,
  type,
  icon,
  iconPlacement,
  children,
  ...rest
}: ButtonProps): React.ReactElement {
  const ButtonIcon = (
    <StyledIcon icon={icon} iconPlacement={iconPlacement} {...rest} />
  );

  return (
    <StyledButton size={size} type={type} {...rest}>
      {icon && iconPlacement === "start" && ButtonIcon}
      {children}
      {icon && iconPlacement === "end" && ButtonIcon}
    </StyledButton>
  );
}
