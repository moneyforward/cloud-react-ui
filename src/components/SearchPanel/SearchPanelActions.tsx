import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export const SearchPanelActions = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;

  ${({ theme: { searchPanel } }) =>
    css`
      border-top: 1px solid ${searchPanel.borderColor};
    `}
`;

SearchPanelActions.defaultProps = defaultProps;
SearchPanelActions.displayName = "SearchPanel.Actions";
