import { forwardRef, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { values, defaultProps } from "../../theme";

export type DropdownItemProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  collapsed?: boolean;
  role?: string;
  onClick?: MouseEventHandler;
};

const StyledDropdownItem = styled.div<DropdownItemProps>`
  ${({ collapsed = false }) => css`
    font-size: ${values.text.size.middle};
    padding: ${collapsed ? "0" : "8px 16px"};
  `}
`;
StyledDropdownItem.defaultProps = defaultProps;

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  (props, ref) => <StyledDropdownItem ref={ref} {...props} />
);

DropdownItem.displayName = "Dropdown.Item";

export { DropdownItem };
