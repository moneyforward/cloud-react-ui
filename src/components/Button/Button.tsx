import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Icon, IconTypes } from '../Icon';
import { defaultProps } from '../../theme';

export type Props = {
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'danger' | 'primary' | 'settings';
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  icon?: IconTypes;
  iconPlacement?: 'start' | 'end';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  className?: string;
};

const StyledButton = styled.button<Props>`
  ${({ theme: { button }, size = 'medium', color = 'default', disabled }) => {
    const buttonSize = button.size[size];
    const buttonColor = button[disabled ? 'disabled' : color];

    return css`
      && {
        display: inline-block;
        height: ${buttonSize.height};
        padding: ${buttonSize.padding};
        line-height: ${buttonSize.height};
        font-size: ${buttonSize.fontSize};
        border-radius: ${button.borderRadius};
        border: ${buttonColor.border};
        color: ${buttonColor.textColor};
        background: transparent;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        position: relative;
        z-index: 0;
      }

      &&:before,
      &&:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        border-radius: ${button.borderRadius};
      }
      &&:before {
        z-index: -1;
        background: ${buttonColor.background};
        transition: opacity 0.2s ease-in-out;
      }
      &&:after {
        content: '';
        z-index: -2;
        background: ${buttonColor.hover.background};
        border-radius: ${button.borderRadius};
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

const StyledIcon = styled(({ iconPlacement, ...props }) => <Icon {...props} />)`
  ${({
    theme: { button },
    iconPlacement = 'start',
    color = 'default',
    disabled,
  }) => css`
      && {
        padding-${iconPlacement === 'start' ? 'right' : 'left'}: 4px;
        width: 10px;
        color: ${button[disabled ? 'disabled' : color].iconColor};
      }
    `}
`;
StyledIcon.defaultProps = defaultProps;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ size, type, icon, iconPlacement, onClick, children, ...rest }, ref) => {
    const ButtonIcon = (
      <StyledIcon icon={icon} iconPlacement={iconPlacement} {...rest} />
    );

    return (
      <StyledButton
        size={size}
        type={type}
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        {icon && iconPlacement === 'start' && ButtonIcon}
        {children}
        {icon && iconPlacement === 'end' && ButtonIcon}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export { Button };
