import styled, { css } from "styled-components";
import { BoxProps } from "./BoxContainer";
import { defaultProps } from "../../theme";

const StyledBox = styled.div`
  ${({ theme: { box } }) => css`
    width: ${box.width};
    margin: ${box.margin};
    padding: ${box.padding};
    background: ${box.background};
    border-radius: ${box.borderRadius};
    border: ${box.border};
    text-align: ${box.textAlign};
    box-sizing: border-box;
  `}
`;
StyledBox.defaultProps = defaultProps;

export const BoxPresenter: React.FC<BoxProps> = (props) => {
  return <StyledBox {...props} />;
};
