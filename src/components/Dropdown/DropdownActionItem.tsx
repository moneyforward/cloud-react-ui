import { forwardRef } from "react";
import styled from "styled-components";
import { color, values, defaultProps } from "../../theme";
import { useDropdown } from "./Dropdown";

export type DropdownActionItemProps = {
  children?: React.ReactNode;
  className?: string;
  role?: string;
  ariaLabel?: string;
  isKeepOpen?: boolean;
};

const StyledDropdownActionItem = styled.div<DropdownActionItemProps>`
  & > a,
  & > button {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    padding: 8px 16px;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    appearance: none;
    font-family: inherit;
    font-size: ${values.text.size.middle};
    color: ${color.nightRider};
    &:hover,
    &:active,
    &:focus {
      color: ${color.royalBlue};
      text-decoration: none;
    }
  }
`;
StyledDropdownActionItem.defaultProps = defaultProps;

export const DropdownActionItem = forwardRef<
  HTMLDivElement,
  DropdownActionItemProps
>(({ isKeepOpen, ...props }, ref) => {
  const { setIsActive } = useDropdown();
  const handleClick = () => {
    if (isKeepOpen) {
      return;
    }
    setIsActive(false);
  };
  return (
    <StyledDropdownActionItem onClick={handleClick} ref={ref} {...props} />
  );
});

DropdownActionItem.displayName = "Dropdown.ActionItem";
