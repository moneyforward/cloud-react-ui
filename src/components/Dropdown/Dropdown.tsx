import { forwardRef } from "react";
import styled from "styled-components";
import { useState } from "react";
import { DropdownItem } from "./DropdownItem";
import { DropdownBlock } from "./DropdownBlock";
import { DropdownBody } from "./DropdownBody";
import { DropdownToggleButton } from "./DropdownToggleButton";

export type DropdownProps = {
  children?: React.ReactNode;
  width?: string;
  toggleLabel: string;
  placement?: "left" | "right";
};

const StyledDropdown = styled.div`
  position: relative;
  width: fit-content;
`;

const DropdownRoot = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, toggleLabel, width, placement }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
      setIsOpen(!isOpen);
    }

    return (
      <StyledDropdown ref={ref}>
        <DropdownToggleButton onClick={handleClick} ariaExpanded={isOpen}>
          {toggleLabel}
        </DropdownToggleButton>
        <DropdownBody width={width} ariaHidden={!isOpen} placement={placement}>
          {children}
        </DropdownBody>
      </StyledDropdown>
    );
  }
);

DropdownRoot.displayName = "Dropdown";

export type { DropdownBodyProps } from "./DropdownBody";
export type { DropdownBlockProps } from "./DropdownBlock";
export type { DropdownItemProps } from "./DropdownItem";
export const Dropdown = Object.assign(DropdownRoot, {
  Body: DropdownBody,
  Block: DropdownBlock,
  Item: DropdownItem,
});
