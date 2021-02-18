import styled, { css } from "styled-components";
import { defaultProps } from "@theme";
import imageCheck from "@assets/images/check.svg";
import { CheckboxProps } from "./CheckboxContainer";

const StyledCheckbox = styled.input`
  ${({ theme }) => css`
    display: none;

    :checked + ${StyledText}:before {
      background-color: ${theme.checkbox.backgroundColor.checked};
      background-image: url(${imageCheck});
      background-size: ${theme.checkbox.backgroundSize};
      background-repeat: no-repeat;
      background-position: center;
      border-width: ${theme.checkbox.borderWidth.checked};
      border-style: ${theme.checkbox.borderStyle.checked};
      border-color: ${theme.checkbox.borderColor.checked};
    }

    :disabled + ${StyledText}:before {
      background-color: ${theme.checkbox.backgroundColor.disabled};
      border-width: ${theme.checkbox.borderWidth.disabled};
      border-style: ${theme.checkbox.borderStyle.disabled};
      border-color: ${theme.checkbox.borderColor.disabled};
    }
  `}
`;
StyledCheckbox.defaultProps = defaultProps;

const StyledText = styled.span`
  ${({ theme }) => css`
    position: relative;
    padding-left: 20px;
    font-size: ${theme.checkbox.fontSize};

    :before {
      content: "";
      box-sizing: border-box;
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: ${theme.checkbox.width};
      height: ${theme.checkbox.height};
      background-color: ${theme.checkbox.backgroundColor.unchecked};
      border-width: ${theme.checkbox.borderWidth.unchecked};
      border-style: ${theme.checkbox.borderStyle.unchecked};
      border-color: ${theme.checkbox.borderColor.unchecked};
      border-radius: ${theme.checkbox.borderRadius};
  `}
`;
StyledText.defaultProps = defaultProps;

export function CheckboxPresenter({
  children,
  className,
  ...rest
}: CheckboxProps): React.ReactElement {
  return (
    <label className={className}>
      <StyledCheckbox type="checkbox" {...rest} />
      <StyledText>{children}</StyledText>
    </label>
  );
}
