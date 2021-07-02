import styled from "styled-components";

export const SearchPanelColumn = styled.div``;

SearchPanelColumn.displayName = "SearchPanel.Column";

// gapの一貫性を保つために指定できる数値を型で限定している
type SearchPanelRowProps = {
  children: React.ReactNode;
  gap?: 8 | 32;
};

export const SearchPanelRow = styled.div<SearchPanelRowProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: ${({ gap = 8 }) => `${gap}px`};

  & + & {
    margin-top: 15px;
  }
`;

SearchPanelRow.displayName = "SearchPanel.Row";
