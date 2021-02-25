import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import { RadioProps } from "./RadioContainer";

const RadioWrapper = styled.span`
  ${({ theme: { radio } }) => css`
    position: relative;
    display: inline-block;
    width: ${radio.width};
    height: ${radio.height};
    vertical-align: middle;
  `}
`;
RadioWrapper.defaultProps = defaultProps;

const Input = styled.input`
  ${({ theme: { radio } }) => css`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;

    :checked + ${Box} {
      background-color: ${radio.backgroundColor.checked};
      border-width: ${radio.borderWidth.checked};
      border-style: ${radio.borderStyle.checked};
      border-color: ${radio.borderColor.checked};
    }

    :disabled + ${Box} {
      background-color: ${radio.backgroundColor.disabled};
      border-width: ${radio.borderWidth.disabled};
      border-style: ${radio.borderStyle.disabled};
      border-color: ${radio.borderColor.disabled};
    }
  `}
`;
Input.defaultProps = defaultProps;

const Box = styled.span`
  ${({ theme: { radio } }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${radio.borderRadius};
    background-color: ${radio.backgroundColor.unchecked};
    border-width: ${radio.borderWidth.unchecked};
    border-style: ${radio.borderStyle.unchecked};
    border-color: ${radio.borderColor.unchecked};
    pointer-events: none;
  `}
`;
Box.defaultProps = defaultProps;

const IconWrapper = styled.span`
  ${({ theme: { radio } }) => css`
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    width: ${radio.icon.width};
    height: ${radio.icon.height};
    transform: translate(-50%, -50%);
    pointer-events: none;

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
    width: ${radio.icon.width};
    height: ${radio.icon.height};

    & > circle {
      fill: ${radio.icon.color};
    }
  `}
`;
Icon.defaultProps = defaultProps;

const Label = styled.label`
  cursor: pointer;
  vertical-align: middle;
`;

export const RadioPresenter: React.FC<RadioProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Label>
      <RadioWrapper className={className}>
        <Input type="radio" {...rest} />
        <Box />
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </RadioWrapper>

      {children}
    </Label>
  );
};
