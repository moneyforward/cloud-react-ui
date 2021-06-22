import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type DropdownBlockProps = {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  collapsed?: boolean;
  role?: string;
};

const StyledDropdownBlock = styled.div<DropdownBlockProps>`
  ${({ collapsed = false, theme: { dropdown } }) => css`
    padding: ${collapsed
      ? dropdown.block.padding.collapsed
      : dropdown.block.padding.default};
    & + & {
      border-top: ${dropdown.block.borderWidth} ${dropdown.block.borderStyle}
        ${dropdown.block.borderColor};
    }
  `}
`;
StyledDropdownBlock.defaultProps = defaultProps;

const DropdownBlock = forwardRef<HTMLDivElement, DropdownBlockProps>(
  (props, ref) => <StyledDropdownBlock ref={ref} {...props} />
);

DropdownBlock.displayName = "Dropdown.Block";

export { DropdownBlock };
