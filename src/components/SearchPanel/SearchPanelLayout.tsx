import styled from "styled-components";

export const SearchPanelColumn = styled.div``;

SearchPanelColumn.displayName = "SearchPanel.Column";

export const SearchPanelRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;

  & + & {
    margin-top: 15px;
  }
`;

SearchPanelRow.displayName = "SearchPanel.Row";

export type SearchPanelFieldGroupProps = {
  children: React.ReactNode;
  type?: "text" | "checkbox";
};

export const SearchPanelFieldGroup = styled.div.attrs<SearchPanelFieldGroupProps>(
  ({ type = "text" }) => ({
    "data-type": type,
  })
)<SearchPanelFieldGroupProps>`
  display: grid;

  [data-type="text"] {
    column-gap: 8px;
  }
  [data-type="checkbox"] {
    column-gap: 84px;
  }
`;

SearchPanelFieldGroup.displayName = "SearchPanel.FieldGroup";
