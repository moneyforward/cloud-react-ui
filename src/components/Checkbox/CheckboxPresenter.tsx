import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import imageCheck from "../../assets/images/check.svg";
import { CheckboxProps } from "./CheckboxContainer";

const StyledCheckbox = styled.input`
  ${({ theme: { checkbox } }) => css`
    display: none;

    :checked + ${StyledText}:before {
      background-color: ${checkbox.backgroundColor.checked};
      background-image: url(${imageCheck});
      background-size: ${checkbox.backgroundSize};
      background-repeat: no-repeat;
      background-position: center;
      border-width: ${checkbox.borderWidth.checked};
      border-style: ${checkbox.borderStyle.checked};
      border-color: ${checkbox.borderColor.checked};
    }

    :disabled + ${StyledText}:before {
      background-color: ${checkbox.backgroundColor.disabled};
      border-width: ${checkbox.borderWidth.disabled};
      border-style: ${checkbox.borderStyle.disabled};
      border-color: ${checkbox.borderColor.disabled};
    }
  `}
`;
StyledCheckbox.defaultProps = defaultProps;

const StyledText = styled.span`
  ${({ theme: { checkbox } }) => css`
    position: relative;
    padding-left: 20px;
    font-size: ${checkbox.fontSize};

    :before {
      content: "";
      box-sizing: border-box;
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: ${checkbox.width};
      height: ${checkbox.height};
      background-color: ${checkbox.backgroundColor.unchecked};
      border-width: ${checkbox.borderWidth.unchecked};
      border-style: ${checkbox.borderStyle.unchecked};
      border-color: ${checkbox.borderColor.unchecked};
      border-radius: ${checkbox.borderRadius};
  `}
`;
StyledText.defaultProps = defaultProps;

export const CheckboxPresenter: React.FC<CheckboxProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <label className={className}>
      <StyledCheckbox type="checkbox" {...rest} />
      <StyledText>{children}</StyledText>
    </label>
  );
};
