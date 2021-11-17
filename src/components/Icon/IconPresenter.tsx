import styled, { css } from 'styled-components';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconProps, IconTypes } from './IconContainer';
import { defaultProps } from '../../theme';

const FontAwesomeConverter: {
  [key in IconTypes]: FontAwesomeIconProps['icon'];
} = {
  bell: 'bell',
  bullhorn: 'bullhorn',
  caretUp: 'caret-up',
  chevronUp: 'chevron-up',
  plus: 'plus',
  question: 'question-circle',
  envelope: 'envelope',
  download: 'download',
  upload: 'upload',
};

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${({ theme: { icon } }) => css`
    font-size: ${icon.fontSize};
    color: ${icon.color};

    &:hover {
      color: ${icon.hover.color};
    }
  `}
`;
StyledFontAwesomeIcon.defaultProps = defaultProps;

export const IconPresenter: React.FC<IconProps> = ({
  width,
  height,
  icon,
  ...rest
}) => {
  return (
    <StyledFontAwesomeIcon
      style={{ width, height }}
      icon={FontAwesomeConverter[icon]}
      {...rest}
    />
  );
};
