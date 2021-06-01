import styled from "styled-components";
import { useState } from "react";
import { DropdownMenu, DropdownMenuItem } from "./DropdownMenu";
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
      <DropdownToggleButton onClick={handleClick} ariaExpanded={isOpen}>
        {toggleLabel}
      </DropdownToggleButton>
      <DropdownBody width={width} ariaHidden={!isOpen} placement={placement}>
        {children}
      </DropdownBody>
    </StyledDropdown>
  );
};

export const Dropdown = Object.assign(DropdownBase, {
  Body: DropdownBody,
  Block: DropdownBlock,
  Menu: DropdownMenu,
  MenuItem: DropdownMenuItem,
});
