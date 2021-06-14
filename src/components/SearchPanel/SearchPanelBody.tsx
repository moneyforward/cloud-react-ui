import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

type SearchPanelBodyProps = {
  children?: React.ReactNode;
  width?: string;
  ariaHidden: boolean;
};

export const SearchPanelBody = styled.div.attrs<SearchPanelBodyProps>(
  ({ ariaHidden }) => ({
    "aria-hidden": ariaHidden,
  })
)<SearchPanelBodyProps>`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: auto;
  transition: max-height 199ms ease-in-out 0ms;

  ${({ theme: { searchPanel } }) =>
    css`
      background-color: ${searchPanel.backgroundColor};
      border-bottom: 1px solid ${searchPanel.borderColor};
    `}

  /* ToggleアニメーションのためにPanelの "おおよそ" のmax-heightを設定 */
  --max-row-number: 4; /* 余裕をもってrow * 4の高さ */
  --height-actions: 64px;
  --height-filters-row: 48px;
  --height-filters-total-gaps: calc(15px * (var(--max-row-number) + 1));
  --height-filters: var(--height-filters-row) * var(--max-row-number) +
    var(--height-filters-total-gaps);
  max-height: calc(var(--height-actions) + var(--height-filters));

  &[aria-hidden="true"] {
    border-bottom: none;
    visibility: hidden;
    max-height: 0;
    transition: visibility 199ms linear 199ms, max-height 199ms ease-in-out 0ms;
  }
`;

SearchPanelBody.defaultProps = defaultProps;
SearchPanelBody.displayName = "SearchPanel.Body";
