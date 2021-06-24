import { forwardRef, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { values, defaultProps } from "../../theme";
import { useDropdown } from "./Dropdown";

export type DropdownItemProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  collapsed?: boolean;
  role?: string;
  isKeepOpen?: boolean;
};

const StyledDropdownItem = styled.div<DropdownItemProps>`
  ${({ collapsed = false }) => css`
    font-size: ${values.text.size.middle};
    padding: ${collapsed ? "0" : "8px 16px"};
  `}
`;
StyledDropdownItem.defaultProps = defaultProps;

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ isKeepOpen, ...props }, ref) => {
    const { setIsActive } = useDropdown();
    const handleClick = () => {
      if (isKeepOpen) {
        return;
      }
      setIsActive(false);
    };
    return <StyledDropdownItem onClick={handleClick} ref={ref} {...props} />;
  }
);

DropdownItem.displayName = "Dropdown.Item";
