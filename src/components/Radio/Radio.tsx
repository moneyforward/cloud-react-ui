import { forwardRef, ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';
import { defaultProps } from '../../theme';

export type Props = ComponentPropsWithRef<'input'>;

const RadioWrapper = styled.div`
  display: inline-block;
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

const InputContainer = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  ${({ theme: { radio } }) => css`
    --radio-background-color: ${radio.backgroundColor.unchecked};
    --radio-border-color: ${radio.borderColor.unchecked};

    ${Input}:checked + & {
      --radio-background-color: ${radio.backgroundColor.checked};
      --radio-border-color: ${radio.borderColor.checked};
    }

    ${Input}:disabled + & {
      cursor: not-allowed;
      color: #999;
    }
  `}
`;
InputContainer.defaultProps = defaultProps;

const RadioButton = styled.span`
  display: grid;
  place-items: center;
  margin-right: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--radio-border-color);
  background-color: var(--radio-background-color);

  > span {
    border-radius: inherit;
    background-color: #fff;
    display: block;
    width: 6px;
    height: 6px;
  }
`;

const Radio = forwardRef<HTMLInputElement, Props>(
  (
    {
      children,
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
      <label htmlFor={id}>
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
        <InputContainer>
          <RadioButton aria-hidden="true">
            <span />
          </RadioButton>
          <span>{children}</span>
        </InputContainer>
      </label>
    </RadioWrapper>
  )
);
Radio.displayName = 'Radio';

export { Radio };
