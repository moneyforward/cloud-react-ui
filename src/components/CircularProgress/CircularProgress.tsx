import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { CircularProgress as MuiCircularProgress } from '@material-ui/core';
import { defaultProps } from '../../theme';

export type Props = {
  className?: string;
  size?: number | string;
};

const StyledCircularProgress = styled(MuiCircularProgress)`
  ${({ theme: { circularProgress } }) => css`
    .MuiCircularProgress-circle {
      color: ${circularProgress.color};
    }
  `}
`;
StyledCircularProgress.defaultProps = defaultProps;

const CircularProgress = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledCircularProgress ref={ref} {...props} />
));

CircularProgress.displayName = 'CircularProgress';

export { CircularProgress };
