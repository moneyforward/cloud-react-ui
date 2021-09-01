import { createContext, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { defaultProps } from '../../theme';

export type Mode = 'number' | 'check';
export const StepsModeContext = createContext<{ mode: Mode }>({
  mode: 'check',
});

export type Props = {
  className?: string;
  mode?: Mode;
  children: React.ReactNode;
};

const StyledSteps = styled.div<Props>`
  ${({ theme: { steps } }) => css`
    display: ${steps.display};
    align-items: ${steps.alignItems};
  `}
`;
StyledSteps.defaultProps = defaultProps;

const Steps = forwardRef<HTMLDivElement, Props>(
  ({ mode = 'check', ...rest }, ref) => (
    <StepsModeContext.Provider value={{ mode }}>
      <StyledSteps ref={ref} {...rest} />
    </StepsModeContext.Provider>
  )
);

Steps.displayName = 'Steps';

export { Steps };
