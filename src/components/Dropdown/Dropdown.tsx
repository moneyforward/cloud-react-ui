import { forwardRef } from "react";
import styled from "styled-components";
import { DropdownItem } from "./DropdownItem";
import { DropdownBlock } from "./DropdownBlock";
import { DropdownBody } from "./DropdownBody";
import { DropdownToggleButton } from "./DropdownToggleButton";

export type DropdownProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

const StyledDropdown = styled.div`
  position: relative;
  width: fit-content;
`;

const DropdownRoot = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledDropdown ref={ref} {...rest}>
        {children}
      </StyledDropdown>
    );
  }
);

DropdownRoot.displayName = "Dropdown";

export type { DropdownToggleButtonProps } from "./DropdownToggleButton";
export type { DropdownBodyProps } from "./DropdownBody";
export type { DropdownBlockProps } from "./DropdownBlock";
export type { DropdownItemProps } from "./DropdownItem";
export const Dropdown = Object.assign(DropdownRoot, {
  Body: DropdownBody,
  Block: DropdownBlock,
  Item: DropdownItem,
  ToggleButton: DropdownToggleButton,
});
