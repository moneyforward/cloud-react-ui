import { useState } from "react";
import styled from "styled-components";
import { defaultProps } from "../../theme";
import { SearchPanelToggle } from "./SearchPanelToggle";
import { SearchPanelBody } from "./SearchPanelBody";
import { SearchPanelFilters } from "./SearchPanelFilters";
import { SearchPanelRow, SearchPanelColumn } from "./SearchPanelLayout";
import { SearchPanelActions } from "./SearchPanelActions";
import { SearchPanelButtonGroup } from "./SearchPanelButtonGroup";

const StyledSearchPanel = styled.div`
  width: 100%;
  position: relative;
`;
StyledSearchPanel.defaultProps = defaultProps;

export type SearchPanelProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

export const SearchPanelBase = ({
  children,
  defaultOpen = false,
}: SearchPanelProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledSearchPanel>
      <SearchPanelBody ariaHidden={!isOpen}>{children}</SearchPanelBody>

      <SearchPanelToggle onClick={handleClick} ariaExpanded={isOpen}>
        絞り込み条件
      </SearchPanelToggle>
    </StyledSearchPanel>
  );
};

export const SearchPanel = Object.assign(SearchPanelBase, {
  Filters: SearchPanelFilters,
  Row: SearchPanelRow,
  Column: SearchPanelColumn,
  Actions: SearchPanelActions,
  ButtonGroup: SearchPanelButtonGroup,
});
