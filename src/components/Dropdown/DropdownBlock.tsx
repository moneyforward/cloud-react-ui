import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { values, color, defaultProps } from "../../theme";

export type DropdownBlockProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  collapsed?: boolean;
  role?: string;
};

const StyledDropdownBlock = styled.div<DropdownBlockProps>`
  ${({ collapsed = false }) => css`
    padding: ${collapsed ? "0" : "8px 0"};
    & + & {
      border-top: ${values.border.width.thin} ${values.border.style.solid}
        ${color.linkWater};
    }
  `}
`;
StyledDropdownBlock.defaultProps = defaultProps;

const DropdownBlock = forwardRef<HTMLDivElement, DropdownBlockProps>(
  (props, ref) => <StyledDropdownBlock ref={ref} {...props} />
);

DropdownBlock.displayName = "Dropdown.Block";

export { DropdownBlock };
