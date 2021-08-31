import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { defaultProps } from '../../theme';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

const StyledInput = styled.input<Props>`
  ${({ theme: { textField }, error = false }) => {
    const colorType = error ? 'error' : 'default';

    return css`
      width: ${textField.width};
      height: ${textField.height};
      padding: ${textField.padding};
      background-color: ${textField.backgroundColor[colorType]};
      border-radius: ${textField.borderRadius};
      border-width: ${textField.borderWidth};
      border-style: ${textField.borderStyle};
      border-color: ${textField.borderColor[colorType]};
      color: ${textField.color};
      font-size: ${textField.fontSize};
      box-sizing: border-box;

      ::placeholder {
        color: ${textField.placeholderColor};
      }
    `;
  }}
`;
StyledInput.defaultProps = defaultProps;

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', ...rest }, ref) => (
    <StyledInput type={type} ref={ref} {...rest} />
  )
);

TextField.displayName = 'TextField';

export { TextField };
