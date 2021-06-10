import { useState } from "react";
import styled from "styled-components";
import { SearchPanelToggle } from "./SearchPanelToggle";
import { SearchPanelBody } from "./SearchPanelBody";
import { SearchPanelFilters } from "./SearchPanelFilters";
import { SearchPanelActions } from "./SearchPanelActions";
import { SearchPanelButtonGroup } from "./SearchPanelButtonGroup";

const StyledSearchPanel = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  position: relative;
`;

export type SearchPanelProps = {
  children?: React.ReactNode;
};

export const SearchPanelBase = ({
  children,
}: SearchPanelProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

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
  Actions: SearchPanelActions,
  ButtonGroup: SearchPanelButtonGroup,
});
