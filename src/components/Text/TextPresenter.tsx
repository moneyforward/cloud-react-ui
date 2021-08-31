import styled, { css } from 'styled-components';
import type { TextProps } from './TextContainer';
import { defaultProps } from '../../theme';

const StyledText = styled.span<TextProps>`
  ${({ theme: { text }, size, color }) => css`
    font-size: ${text.size[size || 'middle']};
    color: ${text.color[color || 'default']};
  `}
`;
StyledText.defaultProps = defaultProps;

export const TextPresenter: React.FC<TextProps> = ({
  tag = 'span',
  ...rest
}) => {
  return <StyledText as={tag} {...rest} />;
};
