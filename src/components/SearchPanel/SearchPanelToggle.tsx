import styled, { css } from "styled-components";
import { color } from "../../theme";
import { Icon } from "../../components";
import { MouseEventHandler, forwardRef } from "react";

const StyledSearchPanelToggle = styled.button.attrs<SearchPanelToggleProps>(
  ({ ariaExpanded }) => ({
    "aria-expanded": ariaExpanded,
    "aria-hasPopup": true,
  })
)<SearchPanelToggleProps>`
  background-color: #fff;
  border: 1px solid ${color.linkWater};
  border-radius: 0 0 4px 4px;
  border-top: 0;
  color: #666;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;

  position: absolute;
  top: 100%;
  right: 20px;

  svg {
    margin-left: 6px;
  }
`;

export type SearchPanelToggleProps = {
  children: React.ReactNode;
  ariaExpanded: boolean;
  onClick: MouseEventHandler;
};

export const SearchPanelToggle = forwardRef<
  HTMLButtonElement,
  SearchPanelToggleProps
>(({ children, ariaExpanded, onClick }, ref) => (
  <StyledSearchPanelToggle
    ref={ref}
    onClick={onClick}
    ariaExpanded={ariaExpanded}
  >
    {children} <Icon icon="caretUp" rotation={ariaExpanded ? undefined : 180} />
  </StyledSearchPanelToggle>
));

SearchPanelToggle.displayName = "SearchPanel.Toggle";