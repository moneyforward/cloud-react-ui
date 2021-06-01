import styled from "styled-components";
import { useState } from "react";
import { Menu, MenuItemLink } from "./Menu";
import { Block } from "./Block";
import { Body } from "./Body";
import { ToggleButton } from "./ToggleButton";

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

const DropdownBase = ({
  children,
  toggleLabel,
  width,
  placement,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledDropdown>
      <ToggleButton onClick={handleClick} ariaExpanded={isOpen}>
        {toggleLabel}
      </ToggleButton>
      <Body width={width} ariaHidden={!isOpen} placement={placement}>
        {children}
      </Body>
    </StyledDropdown>
  );
};

export const Dropdown = Object.assign(DropdownBase, {
  Body,
  Block,
  Menu,
  MenuItemLink,
});
