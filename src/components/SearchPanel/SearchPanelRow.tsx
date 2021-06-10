import styled from "styled-components";

export const SearchPanelRow = styled.div`
  width: 100%;
  & + & {
    margin-top: 15px;
  }
`;

SearchPanelRow.displayName = "SearchPanel.Row";
