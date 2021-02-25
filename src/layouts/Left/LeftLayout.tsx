import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

const Wrapper = styled.div`
  ${({ theme: { leftLayout } }) => css`
    width: ${leftLayout.width};
    margin: ${leftLayout.margin};
  `}
`;
Wrapper.defaultProps = defaultProps;

export const LeftLayout: React.FC = (props) => {
  return <Wrapper {...props} />;
};
