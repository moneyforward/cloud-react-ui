import styled from 'styled-components';

type ToggleButtonProps = {
  children: React.ReactNode;
  ariaExpanded: boolean;
};

export const ToggleButton = styled.button.attrs<ToggleButtonProps>((props) => ({
  'aria-expanded': props.ariaExpanded,
  'aria-hasPopup': true,
}))<ToggleButtonProps>`
  padding: 16px;

  & + & {
    border-top: 1px solid #d4d8dd;
  }
`;

ToggleButton.displayName = 'Dropdown.Block';
