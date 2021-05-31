import styled from 'styled-components';
import { useRef, useState } from 'react';
import { Menu, MenuItemLink } from './Menu';
import { Block } from './Block';
import { Body } from './Body';
import { ToggleButton } from './ToggleButton';

export type DropdownProps = {
  children?: React.ReactNode;
  width?: string;
  toggleLabel: string;
  placement?: 'left' | 'right';
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
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    setIsOpened(!isOpened);
    console.log(isOpened);
  }

  return (
    <StyledDropdown>
      <ToggleButton
        onClick={handleClick}
        ref={toggleButtonRef}
        ariaExpanded={isOpened}
      >
        {toggleLabel}
      </ToggleButton>
      <Body width={width} ariaHidden={!isOpened} placement={placement}>
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
