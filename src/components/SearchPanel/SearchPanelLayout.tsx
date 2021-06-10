import styled from "styled-components";

const SearchPanelColumn = styled.div``;

SearchPanelColumn.displayName = "SearchPanel.Column";

const SearchPanelRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 42px;

  & + & {
    margin-top: 15px;
  }
`;

SearchPanelRow.displayName = "SearchPanel.Row";

export { SearchPanelRow, SearchPanelColumn };
