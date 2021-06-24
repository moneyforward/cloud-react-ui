import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { values, color, defaultProps } from "../../theme";

export type DropdownBodyProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  width?: string;
  isHidden: boolean;
  placement?: "left" | "right";
};

const StyledDropdownBody = styled.div.attrs<DropdownBodyProps>(
  ({ isHidden }) => ({ "aria-hidden": isHidden })
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
    background-color: ${color.white};
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
    visibility: visible;

    & > .block {
      & + & {
        border-top: ${values.border.width.thin},
          ${values.border.style.solid} ${color.linkWater};
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

export const DropdownBody = forwardRef<HTMLDivElement, DropdownBodyProps>(
  (props, ref) => <StyledDropdownBody ref={ref} {...props} />
);

DropdownBody.displayName = "Dropdown.Body";
