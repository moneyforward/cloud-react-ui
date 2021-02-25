import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import imageRadio from "../../assets/images/radio.svg";
import { RadioProps } from "./RadioContainer";

const StyledRadio = styled.input`
  ${({ theme: { radio } }) => css`
    display: none;

    :checked + ${StyledSpan}:before {
      background-color: ${radio.backgroundColor.checked};
      background-image: url(${imageRadio});
      background-size: ${radio.backgroundSize};
      background-repeat: no-repeat;
      background-position: center;
      border-width: ${radio.borderWidth};
      border-style: ${radio.borderStyle};
      border-color: ${radio.borderColor.checked};
    }

    :disabled + ${StyledSpan}:before {
      background-color: ${radio.backgroundColor.disabled};
      border-width: ${radio.borderWidth};
      border-style: ${radio.borderStyle};
      border-color: ${radio.borderColor.disabled};
    }
  `}
`;
StyledRadio.defaultProps = defaultProps;

const StyledSpan = styled.span`
  ${({ theme: { radio } }) => css`
    position: relative;
    padding-left: 20px;
    font-size: ${radio.fontSize};

    :before {
      content: "";
      box-sizing: border-box;
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: ${radio.width};
      height: ${radio.height};
      background-color: ${radio.backgroundColor.unchecked};
      border-width: ${radio.borderWidth};
      border-style: ${radio.borderStyle};
      border-color: ${radio.borderColor.unchecked};
      border-radius: ${radio.borderRadius};
    }
  `}
`;
StyledSpan.defaultProps = defaultProps;

export const RadioPresenter: React.FC<RadioProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <label className={className}>
      <StyledRadio type="radio" {...rest} />
      <StyledSpan>{children}</StyledSpan>
    </label>
  );
};
