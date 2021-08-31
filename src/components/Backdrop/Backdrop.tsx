import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Backdrop as MuiBackdrop } from '@material-ui/core';
import { CircularProgress } from '../CircularProgress';
import { defaultProps } from '../../theme';

export type Props = {
  open?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
};

const StyledBackdrop = styled(MuiBackdrop)`
  ${({ theme: { backdrop } }) => css`
    && {
      z-index: ${backdrop.zIndex};
    }
  `}
`;
StyledBackdrop.defaultProps = defaultProps;

const Backdrop = forwardRef<HTMLDivElement, Props>(
  ({ open = false, onClick, ...rest }, ref) => (
    <StyledBackdrop ref={ref} open={open} onClick={onClick} {...rest}>
      <CircularProgress />
    </StyledBackdrop>
  )
);

Backdrop.displayName = 'Backdrop';

export { Backdrop };
