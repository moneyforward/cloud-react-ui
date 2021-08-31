import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { defaultProps } from '../../theme';

export type Props = {
  completed?: boolean;
  className?: string;
};

const StepTieWrapper = styled.div`
  ${({ theme: { steps } }) => css`
    width: ${steps.stepTie.width};
    height: ${steps.stepTie.height};
    margin: ${steps.stepTie.margin};
    display: ${steps.stepTie.display};
    align-items: ${steps.stepTie.alignItems};
  `}
`;
StepTieWrapper.defaultProps = defaultProps;

const Tie = styled.div<Props>`
  ${({ theme: { steps }, completed = false }) => {
    const colorType = completed ? 'completed' : 'waiting';

    return css`
      width: ${steps.stepTie.tie.width};
      height: ${steps.stepTie.tie.height};
      background: ${steps.stepTie.tie.background[colorType]};
    `;
  }}
`;
Tie.defaultProps = defaultProps;

const StepTie = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StepTieWrapper>
    <Tie ref={ref} {...props} />
  </StepTieWrapper>
));

StepTie.displayName = 'StepTie';

export { StepTie };
