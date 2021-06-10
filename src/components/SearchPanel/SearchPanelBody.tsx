import styled from "styled-components";

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
  overflow-y: auto;
  transition: max-height 199ms ease-in-out 0ms;

  /* ToggleアニメーションのためにPanelの "おおよそ" のmax-heightを設定 */
  --max-row-number: 3;
  --height-actions: 64px;
  --height-filters-row: 48px;
  --height-filters-total-gaps: calc(15px * (var(--max-row-number) + 1));
  --height-filters: var(--height-filters-row) * var(--max-row-number) +
    var(--height-filters-total-gaps);
  max-height: calc(var(--height-actions) + var(--height-filters));

  &[aria-hidden="true"] {
    visibility: hidden;
    max-height: 0;
    transition: visibility 299ms linear 299ms, max-height 199ms ease-in-out 0ms;
  }
`;

SearchPanelBody.displayName = "SearchPanel.Body";
