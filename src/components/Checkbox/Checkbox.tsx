import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  name?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  children?: React.ReactNode;
  className?: string;
};

const CheckboxWrapper = styled.span`
  ${({ theme: { checkbox } }) => css`
    position: relative;
    display: inline-block;
    width: ${checkbox.width};
    height: ${checkbox.height};
    vertical-align: middle;
  `}
`;
CheckboxWrapper.defaultProps = defaultProps;

const Input = styled.input`
  ${({ theme: { checkbox } }) => css`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;

    :checked + ${Box} {
      background-color: ${checkbox.backgroundColor.checked};
      border-width: ${checkbox.borderWidth.checked};
      border-style: ${checkbox.borderStyle.checked};
      border-color: ${checkbox.borderColor.checked};
    }

    :disabled + ${Box} {
      background-color: ${checkbox.backgroundColor.disabled};
      border-width: ${checkbox.borderWidth.disabled};
      border-style: ${checkbox.borderStyle.disabled};
      border-color: ${checkbox.borderColor.disabled};
    }
  `}
`;
Input.defaultProps = defaultProps;

const Box = styled.span`
  ${({ theme: { checkbox } }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${checkbox.borderRadius};
    background-color: ${checkbox.backgroundColor.unchecked};
    border-width: ${checkbox.borderWidth.unchecked};
    border-style: ${checkbox.borderStyle.unchecked};
    border-color: ${checkbox.borderColor.unchecked};
    pointer-events: none;
    box-sizing: border-box;
  `}
`;
Box.defaultProps = defaultProps;

const IconWrapper = styled.span`
  ${({ theme: { checkbox } }) => css`
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    width: ${checkbox.icon.width};
    height: ${checkbox.icon.height};
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
    viewBox="0 0 10 8"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M.34 4.72a.485.485 0 0 1 0-.682l.68-.683a.478.478 0 0 1 .678 0L3.8 5.47 8.302.941a.478.478 0 0 1 .679 0l.678.683a.485.485 0 0 1 0 .683L4.14 7.859a.478.478 0 0 1-.678 0L.34 4.72z"
    />
  </svg>
))`
  ${({ theme: { checkbox } }) => css`
    width: ${checkbox.icon.width};
    height: ${checkbox.icon.height};

    & > path {
      fill: ${checkbox.icon.color};
    }
  `}
`;
Icon.defaultProps = defaultProps;

const Label = styled.label`
  cursor: pointer;
  vertical-align: middle;
`;

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ children, className, ...rest }, ref) => (
    <Label>
      <CheckboxWrapper className={className}>
        <Input type="checkbox" ref={ref} {...rest} />
        <Box />
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </CheckboxWrapper>

      {children}
    </Label>
  )
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
