import styled, { css } from "styled-components";
import { BlockProps } from "./BlockContainer";
import { defaultProps } from "../../theme";

const StyledBlock = styled.div<BlockProps>`
  ${({ theme: { block }, border = true }) => css`
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

export const BlockPresenter: React.FC<BlockProps> = (props) => {
  return <StyledBlock {...props} />;
};
