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
    --radio-bg-color: ${radio.backgroundColor.unchecked};

    width: 16px;
    height: 16px;
    border-radius: ${radio.borderRadius};
    background-color: var(--radio-bg-color);
    border: 1px solid var(--radio-bg-color);
    box-sizing: border-box;

    ${Input}:checked + ${Label} > & {
      --radio-bg-color: ${radio.backgroundColor.checked};
    }

    ${Input}:disabled + ${Label} > & {
      --radio-bg-color: ${radio.backgroundColor.disabled};
    }
  `}
`;
RadioButton.defaultProps = defaultProps;

const IconWrapper = styled.span`
  ${({ theme: { radio } }) => css`
    display: inline-block;
    width: ${radio.icon.width};
    height: ${radio.icon.height};

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

  ${Input}:disabled + & {
    cursor: not-allowed;
    color: #999;
  }
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
