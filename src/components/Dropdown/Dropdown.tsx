import { forwardRef, createContext, useState, useContext } from "react";
import styled from "styled-components";
import { DropdownItem } from "./DropdownItem";
import { DropdownBlock } from "./DropdownBlock";
import { DropdownBody } from "./DropdownBody";
import { DropdownToggleButton } from "./DropdownToggleButton";
import { defaultProps } from "../../theme";

export type DropdownProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  width?: string;
  toggleLabel: string;
  placement?: "left" | "right";
};

interface IDropdownContext {
  isActive: boolean;
  setIsActive: (flag: boolean) => void;
}

export const DropdownContext = createContext<IDropdownContext | undefined>(
  undefined
);

export const useDropdown = (): IDropdownContext => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "This component must be used within a <Dropdown> component."
    );
  }
  return context;
};

const StyledDropdown = styled.div`
  position: relative;
  width: fit-content;
`;
StyledDropdown.defaultProps = defaultProps;

const DropdownRoot = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, toggleLabel, width, placement, ...rest }, ref) => {
    const [isActive, setIsActive] = useState(false);
    return (
      <DropdownContext.Provider value={{ isActive, setIsActive }}>
        <StyledDropdown ref={ref} {...rest}>
          <DropdownToggleButton>{toggleLabel}</DropdownToggleButton>
          <DropdownBody width={width} placement={placement}>
            {children}
          </DropdownBody>
        </StyledDropdown>
      </DropdownContext.Provider>
    );
  }
);

DropdownRoot.displayName = "Dropdown";

export type { DropdownBlockProps } from "./DropdownBlock";
export type { DropdownItemProps } from "./DropdownItem";
export const Dropdown = Object.assign(DropdownRoot, {
  Block: DropdownBlock,
  Item: DropdownItem,
});
