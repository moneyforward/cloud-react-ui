import styled from "styled-components";
import { Icon } from "../../components";
import { MouseEventHandler, forwardRef } from "react";
import { theme } from "../../theme";

type ToggleButtonProps = {
  children: React.ReactNode;
  ariaExpanded: boolean;
  onClick: MouseEventHandler;
};

const StyledToggleButton = styled.button.attrs<ToggleButtonProps>(
  ({ ariaExpanded }) => ({
    "aria-expanded": ariaExpanded,
    "aria-haspopup": true,
  })
)<ToggleButtonProps>`
  font-size: ${theme.text.size.middle};
  color: ${theme.text.color.default};
  background-color: #fff;
  border: none;

  svg {
    margin-left: 6px;
  }
`;

export const DropdownToggleButton = forwardRef<
  HTMLButtonElement,
  ToggleButtonProps
>(({ children, ariaExpanded, onClick }, ref) => (
  <StyledToggleButton ref={ref} onClick={onClick} ariaExpanded={ariaExpanded}>
    {children}
    <Icon icon="caretUp" rotation={ariaExpanded ? undefined : 180} />
  </StyledToggleButton>
));

DropdownToggleButton.displayName = "Dropdown.ToggleButton";
