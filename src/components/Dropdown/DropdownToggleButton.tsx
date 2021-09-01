import styled from 'styled-components';
import { Icon } from '../../components';
import { forwardRef } from 'react';
import { values, color, defaultProps } from '../../theme';
import { useDropdown } from './Dropdown';

export type DropdownToggleButtonProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  isOpen?: boolean;
};

const StyledToggleButton = styled.button.attrs<DropdownToggleButtonProps>(
  ({ isOpen }) => ({
    'aria-expanded': isOpen,
    'aria-haspopup': true,
  })
)<DropdownToggleButtonProps>`
  font-size: ${values.text.size.middle};
  color: ${values.text.color.default};
  background-color: ${color.white};
  border: 0;
  cursor: pointer;
  svg {
    margin-left: 6px;
  }
`;
StyledToggleButton.defaultProps = defaultProps;

export const DropdownToggleButton = forwardRef<
  HTMLButtonElement,
  DropdownToggleButtonProps
>(({ isOpen, children, ...rest }, ref) => {
  const { isActive, setIsActive } = useDropdown();
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <StyledToggleButton
      onClick={handleClick}
      aria-expanded={isActive}
      ref={ref}
      isOpen={isActive}
      {...rest}
    >
      {children}
      <Icon icon="caretUp" rotation={isActive ? undefined : 180} />
    </StyledToggleButton>
  );
});

DropdownToggleButton.displayName = 'Dropdown.ToggleButton';
