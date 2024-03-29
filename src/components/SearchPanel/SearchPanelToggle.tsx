import styled, { css } from 'styled-components';
import { defaultProps } from '../../theme';
import { Icon } from '../../components';
import { MouseEventHandler, forwardRef } from 'react';

const StyledSearchPanelToggle = styled.button.attrs<SearchPanelToggleProps>(
  ({ ariaExpanded }) => ({
    'aria-expanded': ariaExpanded,
    'aria-haspopup': true,
  })
)<SearchPanelToggleProps>`
  ${({ theme: { searchPanel } }) => css`
    background-color: ${searchPanel.backgroundColor};
    border: 1px solid ${searchPanel.borderColor};
    border-radius: 0 0 4px 4px;
    border-top: 0;
  `}

  color: #666;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  top: calc(100% - 1px);
  right: 20px;

  svg {
    margin-left: 6px;
  }
`;

StyledSearchPanelToggle.defaultProps = defaultProps;

export type SearchPanelToggleProps = {
  children: React.ReactNode;
  ariaExpanded: boolean;
  onClick: MouseEventHandler;
};

export const SearchPanelToggle = forwardRef<
  HTMLButtonElement,
  SearchPanelToggleProps
>(({ children, ariaExpanded, onClick }, ref) => (
  <StyledSearchPanelToggle
    ref={ref}
    onClick={onClick}
    ariaExpanded={ariaExpanded}
  >
    {children} <Icon icon="caretUp" rotation={ariaExpanded ? undefined : 180} />
  </StyledSearchPanelToggle>
));

SearchPanelToggle.displayName = 'SearchPanel.Toggle';
