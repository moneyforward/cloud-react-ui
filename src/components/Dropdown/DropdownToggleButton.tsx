import styled, { css } from "styled-components";
import { Icon } from "../../components";
import { MouseEventHandler, forwardRef } from "react";
import { theme, defaultProps } from "../../theme";

export type DropdownToggleButtonProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  ariaExpanded: boolean;
  onClick: MouseEventHandler;
};

const StyledToggleButton = styled.button.attrs<DropdownToggleButtonProps>(
  ({ ariaExpanded }) => ({
    "aria-expanded": ariaExpanded,
    "aria-haspopup": true,
  })
)`
  ${({ theme: { dropdown } }) => css`
    font-size: ${dropdown.toggle.fontSize};
    color: ${dropdown.toggle.color};
    background-color: ${dropdown.toggle.backgroundColor};
    border: ${dropdown.toggle.border};

    svg {
      margin-left: ${dropdown.toggle.svg.marginLeft};
    }
  `}
`;
StyledToggleButton.defaultProps = defaultProps;

const DropdownToggleButton = forwardRef<
  HTMLButtonElement,
  DropdownToggleButtonProps
>(({ children, ariaExpanded, onClick, ...rest }, ref) => (
  <StyledToggleButton
    onClick={onClick}
    aria-expanded={ariaExpanded}
    ref={ref}
    {...rest}
  >
    {children}
    <Icon icon="caretUp" rotation={ariaExpanded ? undefined : 180} />
  </StyledToggleButton>
));

DropdownToggleButton.displayName = "Dropdown.ToggleButton";

export { DropdownToggleButton };
