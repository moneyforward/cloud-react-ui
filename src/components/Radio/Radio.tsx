import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { defaultProps } from '../../theme';

export type Props = {
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  children?: React.ReactNode;
  className?: string;
  id: string;
};

const RadioWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
RadioWrapper.defaultProps = defaultProps;

const Input = styled.input`
  /* visually-hidden */
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
Input.defaultProps = defaultProps;

const RadioButton = styled.span`
  display: grid;
  place-items: center;
  margin-right: 4px;

  ${({ theme: { radio } }) => css`
    width: 16px;
    height: 16px;
    border-radius: ${radio.borderRadius};
    background-color: ${radio.backgroundColor.unchecked};
    border-width: ${radio.borderWidth.unchecked};
    border-style: ${radio.borderStyle.unchecked};
    border-color: ${radio.borderColor.unchecked};
    /* pointer-events: none; */
    box-sizing: border-box;

    ${Input}:checked + ${Label} > & {
      background-color: ${radio.backgroundColor.checked};
      border-width: ${radio.borderWidth.checked};
      border-style: ${radio.borderStyle.checked};
      border-color: ${radio.borderColor.checked};
    }

    ${Input}:disabled + ${Label} > & {
      background-color: ${radio.backgroundColor.disabled};
      border-width: ${radio.borderWidth.disabled};
      border-style: ${radio.borderStyle.disabled};
      border-color: ${radio.borderColor.disabled};
    }
  `}
`;
RadioButton.defaultProps = defaultProps;

const IconWrapper = styled.span`
  ${({ theme: { radio } }) => css`
    display: inline-block;
    width: ${radio.icon.width};
    height: ${radio.icon.height};
    /* pointer-events: none; */

    & > svg {
      vertical-align: top;
    }
  `}
`;
IconWrapper.defaultProps = defaultProps;

const Icon = styled(({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6 6"
    className={className}
    aria-hidden="true"
  >
    <circle
      cx="102"
      cy="546"
      r="3"
      fillRule="evenodd"
      transform="translate(-99 -543)"
    />
  </svg>
))`
  ${({ theme: { radio } }) => css`
    fill: ${radio.icon.color};
  `}
`;
Icon.defaultProps = defaultProps;

const Label = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`;

const LabelText = styled.span``;

const Radio = forwardRef<HTMLInputElement, Props>(
  ({ children, className, id, ...rest }, ref) => (
    <RadioWrapper>
      <Input type="radio" id={id} ref={ref} {...rest} />
      <Label htmlFor={id}>
        <RadioButton>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </RadioButton>
        <LabelText>{children}</LabelText>
      </Label>
    </RadioWrapper>
  )
);

Radio.displayName = 'Radio';

export { Radio };
