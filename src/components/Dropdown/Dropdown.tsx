import {
  forwardRef,
  createContext,
  useState,
  useContext,
  MouseEventHandler,
} from "react";
import styled from "styled-components";
import { DropdownItem } from "./DropdownItem";
import { DropdownActionItem } from "./DropdownActionItem";
import { DropdownBlock } from "./DropdownBlock";
import { DropdownBody } from "./DropdownBody";
import { DropdownToggleButton } from "./DropdownToggleButton";
import { defaultProps } from "../../theme";

export type DropdownProps = {
  anchor?: JSX.Element;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  width?: string;
  toggleLabel?: string;
  placement?: "left" | "right";
};

interface IDropdownContext {
  isActive: boolean;
  setIsActive: (flag: boolean) => void;
}

type OverlayProps = {
  isOpen: boolean;
  onClick: MouseEventHandler;
  ariaLabel: string;
};

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

const StyledOverlay = styled.div.attrs<OverlayProps>(
  ({ isOpen, ariaLabel }) => ({
    "aria-hidden": !isOpen,
    "aria-label": ariaLabel,
  })
)<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: transparent;
  z-index: -1;
  &[aria-hidden="true"] {
    display: none;
  }
`;

const StyledDropdown = styled.div`
  position: relative;
  width: fit-content;
`;
StyledDropdown.defaultProps = defaultProps;

const DropdownRoot = forwardRef<HTMLDivElement, DropdownProps>(
  ({ anchor, children, toggleLabel, width, placement, ...rest }, ref) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
      setIsActive(false);
    };
    return (
      <DropdownContext.Provider value={{ isActive, setIsActive }}>
        <StyledDropdown ref={ref} {...rest}>
          {anchor ?? <DropdownToggleButton>{toggleLabel}</DropdownToggleButton>}
          <DropdownBody width={width} placement={placement}>
            {children}
          </DropdownBody>
          <StyledOverlay
            isOpen={isActive}
            onClick={handleClick}
            ariaLabel="閉じる"
          />
        </StyledDropdown>
      </DropdownContext.Provider>
    );
  }
);

DropdownRoot.displayName = "Dropdown";

export type { DropdownToggleButtonProps } from "./DropdownToggleButton";
export type { DropdownBlockProps } from "./DropdownBlock";
export type { DropdownItemProps } from "./DropdownItem";
export type { DropdownActionItemProps } from "./DropdownActionItem";
export const Dropdown = Object.assign(DropdownRoot, {
  Block: DropdownBlock,
  Item: DropdownItem,
  ActionItem: DropdownActionItem,
});
