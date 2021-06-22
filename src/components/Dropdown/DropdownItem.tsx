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
  ${({ collapsed = false, theme: { dropdown } }) => css`
    font-size: ${dropdown.item.fontSize};
    padding: ${collapsed
      ? dropdown.item.padding.collapsed
      : dropdown.item.padding.default};
  `}
`;
StyledDropdownItem.defaultProps = defaultProps;

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  (props, ref) => <StyledDropdownItem ref={ref} {...props} />
);

DropdownItem.displayName = "Dropdown.Item";
