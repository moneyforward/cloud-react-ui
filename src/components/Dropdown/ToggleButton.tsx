import styled from 'styled-components';
import { Icon } from '../../components';
import { MouseEventHandler } from 'react';

type ToggleButtonProps = {
  children: React.ReactNode;
  ariaExpanded: boolean;
  onClick: MouseEventHandler;
};

const BaseToggleButton = styled.button.attrs<ToggleButtonProps>(
  ({ ariaExpanded }) => ({
    'aria-expanded': ariaExpanded,
    'aria-hasPopup': true,
  })
)<ToggleButtonProps>`
  border: none;
  svg {
    margin-left: 6px;
  }
`;

export const ToggleButton = ({
  children,
  ariaExpanded,
  onClick,
}: ToggleButtonProps) => (
  <BaseToggleButton onClick={onClick} ariaExpanded={ariaExpanded}>
    {children}
    <Icon icon="caretUp" rotation={ariaExpanded ? undefined : 180} />
  </BaseToggleButton>
);

ToggleButton.displayName = 'Dropdown.ToggleButton';
