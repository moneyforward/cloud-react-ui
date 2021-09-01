import styled from 'styled-components';

export const SearchPanelButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 8px;

  & > button {
    min-width: 76px;
  }
`;

SearchPanelButtonGroup.displayName = 'SearchPanel.ButtonGroup';
