import styled, { css } from "styled-components";
import { color } from "../../theme";
import { SearchPanelToggle, SearchPanelToggleProps } from "./SearchPanelToggle";

const SearchPanelBody = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`;
SearchPanelBody.displayName = "SearchPanel.Body";

const SearchPanelActions = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid ${color.linkWater};
  display: flex;
  justify-content: center;
`;
SearchPanelActions.displayName = "SearchPanel.Actions";

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

export const SearchPanelBase = ({ children }: SearchPanelProps) => (
  <StyledSearchPanel>
    {children}
    <SearchPanelToggle>絞り込み条件</SearchPanelToggle>
  </StyledSearchPanel>
);

export const SearchPanel = Object.assign(SearchPanelBase, {
  Body: SearchPanelBody,
  Actions: SearchPanelActions,
});
