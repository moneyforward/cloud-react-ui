import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { values, defaultProps } from "../../theme";

export type DropdownItemProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  collapsed?: boolean;
  role?: string;
};

const StyledDropdownItem = styled.div<DropdownItemProps>`
  ${({ collapsed = false }) => css`
    font-size: ${values.text.size.middle};
    padding: ${collapsed ? "0" : "8px 16px"};
  `}
`;
StyledDropdownItem.defaultProps = defaultProps;

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ ...props }, ref) => {
    return <StyledDropdownItem ref={ref} {...props} />;
  }
);

DropdownItem.displayName = "Dropdown.Item";
