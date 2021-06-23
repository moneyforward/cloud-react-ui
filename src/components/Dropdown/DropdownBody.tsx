import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { color, defaultProps } from "../../theme";

export type DropdownBodyProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  width?: string;
  ariaHidden: boolean;
  placement?: "left" | "right";
};

const StyledDropdownBody = styled.div.attrs<DropdownBodyProps>(
  ({ ariaHidden }) => ({ "aria-hidden": ariaHidden })
)<DropdownBodyProps>`
  ${({ width = "max-content", placement = "left" }) => css`
    width: ${width};
    position: absolute;
    top: calc(100% + 10px);
    left: ${placement === "left" && 0};
    right: ${placement === "right" && 0};
    transform-origin: top ${placement};
    transition: opacity 299ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 199ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    overflow-y: auto;
    opacity: 1;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
    visibility: visible;

    & > .block {
      padding: 8px 16px;

      & + & {
        border-top: 1px solid ${color.linkWater};
      }
    }

    &[aria-hidden="true"] {
      transform: scale(0.75, 0.5625);
      transition: opacity 299ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 199ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        visibility 299ms linear 299ms;
      visibility: hidden;
      opacity: 0;
    }
  `}
`;
StyledDropdownBody.defaultProps = defaultProps;

const DropdownBody = forwardRef<HTMLDivElement, DropdownBodyProps>(
  (props, ref) => <StyledDropdownBody ref={ref} {...props} />
);

DropdownBody.displayName = "Dropdown.Body";

export { DropdownBody };
