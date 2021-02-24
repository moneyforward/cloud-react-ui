import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { TextFieldProps } from "./TextFieldContainer";
import { defaultProps } from "../../theme";

const StyledInput = styled.input<TextFieldProps>`
  ${({ theme: { textField }, error = false }) => {
    const colorType = error ? "error" : "default";

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

      ::placeholder {
        color: ${textField.placeholderColor};
      }
    `;
  }}
`;
StyledInput.defaultProps = defaultProps;

export const TextFieldPresenter = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextFieldPresenter({ type = "text", ...rest }, ref) {
    return <StyledInput type={type} ref={ref} {...rest} />;
  }
);
