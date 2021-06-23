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
  ${({ width = "max-content", placement = "left", theme: { dropdown } }) => css`
    width: ${width};
    position: ${dropdown.body.position};
    top: ${dropdown.body.top};
    left: ${placement === "left" && 0};
    right: ${placement === "right" && 0};
    transform-origin: top ${placement};
    transition: ${dropdown.body.transition.default};
    overflow-y: ${dropdown.body.overflowY};
    opacity: ${dropdown.body.opacity.default};
    border-radius: ${dropdown.body.borderRadius};
    background-color: ${dropdown.body.backgroundColor};
    box-shadow: ${dropdown.body.boxShadow};
    visibility: ${dropdown.body.visibility.default};

    & > .block {
      & + & {
        border-top: ${dropdown.body.block.borderWidth}
          ${dropdown.body.block.borderStyle} ${dropdown.body.block.borderColor};
      }
    }

    &[aria-hidden="true"] {
      transform: ${dropdown.body.transform};
      transition: ${dropdown.body.transition.hidden};
      visibility: ${dropdown.body.visibility.hidden};
      opacity: ${dropdown.body.opacity.hidden};
    }
  `}
`;
StyledDropdownBody.defaultProps = defaultProps;

const DropdownBody = forwardRef<HTMLDivElement, DropdownBodyProps>(
  (props, ref) => <StyledDropdownBody ref={ref} {...props} />
);

DropdownBody.displayName = "Dropdown.Body";

export { DropdownBody };
