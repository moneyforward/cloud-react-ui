import styled, { css } from 'styled-components';

type DropdownBodyProps = {
  children?: React.ReactNode;
  width?: string;
  ariaHidden: boolean;
  placement?: 'left' | 'right';
};

export const Body = styled.div.attrs<DropdownBodyProps>(({ ariaHidden }) => ({
  'aria-hidden': ariaHidden,
}))<DropdownBodyProps>`
  width: ${({ width }) => width};
  position: absolute;
  top: calc(100% + 10px);
  left: ${({ placement }) => placement === 'left' && 0};
  right: ${({ placement }) => placement === 'right' && 0};
  transform-origin: top ${({ placement }) => placement};
  transition: 299ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition-property: opacity transform;
  max-height: none;
  overflow-y: auto;
  opacity: 1;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);

  & > .block {
    padding: 8px 16px;

    & + & {
      border-top: 1px solid #d4d8dd;
    }
  }

  &[aria-hidden='true'] {
    max-height: 0;
    transform: scale(0.75, 0.5625);
    opacity: 0;
  }
`;

Body.defaultProps = {
  width: 'max-content',
  placement: 'left',
};

Body.displayName = 'Dropdown.Body';
