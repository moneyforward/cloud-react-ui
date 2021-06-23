import { forwardRef, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type DropdownItemProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  collapsed?: boolean;
  role?: string;
  onClick?: MouseEventHandler;
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
