import styled, { css } from 'styled-components';
import { defaultProps } from '../../theme';

const Wrapper = styled.div`
  ${({ theme: { centerLayout } }) => css`
    width: ${centerLayout.width};
    margin-left: auto;
    margin-right: auto;
  `}
`;
Wrapper.defaultProps = defaultProps;

export const CenterLayout: React.FC = (props) => {
  return <Wrapper {...props} />;
};
