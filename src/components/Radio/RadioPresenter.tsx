import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import imageRadio from "../../assets/images/radio.svg";
import { RadioProps } from "./RadioContainer";

const StyledRadio = styled.input`
  ${({ theme }) => css`
    display: none;

    :checked + ${StyledSpan}:before {
      background-color: ${theme.radio.backgroundColor.checked};
      background-image: url(${imageRadio});
      background-size: ${theme.radio.backgroundSize};
      background-repeat: no-repeat;
      background-position: center;
      border-width: ${theme.radio.borderWidth};
      border-style: ${theme.radio.borderStyle};
      border-color: ${theme.radio.borderColor.checked};
    }

    :disabled + ${StyledSpan}:before {
      background-color: ${theme.radio.backgroundColor.disabled};
      border-width: ${theme.radio.borderWidth};
      border-style: ${theme.radio.borderStyle};
      border-color: ${theme.radio.borderColor.disabled};
    }
  `}
`;
StyledRadio.defaultProps = defaultProps;

const StyledSpan = styled.span`
  ${({ theme }) => css`
    position: relative;
    padding-left: 20px;
    font-size: ${theme.radio.fontSize};

    :before {
      content: "";
      box-sizing: border-box;
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: ${theme.radio.width};
      height: ${theme.radio.height};
      background-color: ${theme.radio.backgroundColor.unchecked};
      border-width: ${theme.radio.borderWidth};
      border-style: ${theme.radio.borderStyle};
      border-color: ${theme.radio.borderColor.unchecked};
      border-radius: ${theme.radio.borderRadius};
    }
  `}
`;
StyledSpan.defaultProps = defaultProps;

export function RadioPresenter({
  children,
  className,
  ...rest
}: RadioProps): React.ReactElement {
  return (
    <label className={className}>
      <StyledRadio type="radio" {...rest} />
      <StyledSpan>{children}</StyledSpan>
    </label>
  );
}
