import styled from "styled-components";
import { Icon } from "../../components";
import { MouseEventHandler, forwardRef } from "react";
import { values, color, defaultProps } from "../../theme";

export type DropdownToggleButtonProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  isOpen: boolean;
  onClick: MouseEventHandler;
};

const StyledToggleButton = styled.button.attrs<DropdownToggleButtonProps>(
  ({ isOpen }) => ({
    "aria-expanded": isOpen,
    "aria-haspopup": true,
  })
)`
  font-size: ${values.text.size.middle};
  color: ${values.text.color.default};
  background-color: ${color.white};
  border: none;

  svg {
    margin-left: 6px;
  }
`;
StyledToggleButton.defaultProps = defaultProps;

export const DropdownToggleButton = forwardRef<
  HTMLButtonElement,
  DropdownToggleButtonProps
>(({ children, isOpen, onClick, ...rest }, ref) => (
  <StyledToggleButton
    onClick={onClick}
    aria-expanded={isOpen}
    ref={ref}
    {...rest}
  >
    {children}
    <Icon icon="caretUp" rotation={isOpen ? undefined : 180} />
  </StyledToggleButton>
));

DropdownToggleButton.displayName = "Dropdown.ToggleButton";
