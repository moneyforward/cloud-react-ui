import { forwardRef, ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';
import { defaultProps } from '../../theme';

export type Props = {
  id: string;
} & ComponentPropsWithRef<'input'>;

const RadioWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
RadioWrapper.defaultProps = defaultProps;

const Input = styled.input`
  /* visually-hidden */
  /* TODO: Should extract visually-hidden style as a utility style */
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
    --radio-state-color: ${radio.backgroundColor.unchecked};

    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: ${radio.borderRadius};
    border: 5px solid var(--radio-state-color);

    ${Input}:checked + ${Label} > & {
      --radio-state-color: ${radio.backgroundColor.checked};
    }

    ${Input}:disabled + ${Label} > & {
      --radio-state-color: ${radio.backgroundColor.disabled};
    }
  `}
`;
RadioButton.defaultProps = defaultProps;

const Label = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  ${Input}:disabled + & {
    cursor: not-allowed;
    color: #999;
  }
`;
const LabelText = styled.span``;

const Radio = forwardRef<HTMLInputElement, Props>(
  (
    {
      children,
      className,
      id,
      name,
      value,
      disabled,
      defaultChecked,
      onClick,
      onChange,
      ...rest
    },
    ref
  ) => (
    <RadioWrapper>
      <Input
        type="radio"
        id={id}
        ref={ref}
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onClick={onClick}
        onChange={onChange}
        {...rest}
      />
      <Label htmlFor={id}>
        <RadioButton />
        <LabelText>{children}</LabelText>
      </Label>
    </RadioWrapper>
  )
);
Radio.displayName = 'Radio';

export { Radio };
