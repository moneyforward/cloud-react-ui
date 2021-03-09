import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  border?: boolean;
  children: React.ReactNode;
  className?: string;
};

const StyledBlock = styled.div<Props>`
  ${({ theme: { block }, border = false }) => css`
    width: ${block.width};
    margin: ${block.margin};
    padding: ${block.padding};
    background: ${block.background};
    border-radius: ${block.borderRadius};
    border: ${border ? block.border : undefined};
    text-align: ${block.textAlign};
    box-sizing: border-box;
  `}
`;
StyledBlock.defaultProps = defaultProps;

const Block = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledBlock ref={ref} {...props} />
));

Block.displayName = "Block";

export { Block };
