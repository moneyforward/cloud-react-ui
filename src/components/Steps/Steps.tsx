import { forwardRef } from "react";
import styled, {css} from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  className?: string;
  children: React.ReactNode
}

const StyledSteps = styled.div<Props>`
  ${({ theme: { steps } }) => css`
  `}
`;
StyledSteps.defaultProps = defaultProps

const Steps = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledSteps ref={ref} {...props} />
));

Steps.displayName = "Steps"

export { Steps };
