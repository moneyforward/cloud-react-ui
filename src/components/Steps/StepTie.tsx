import { forwardRef } from "react";
import styled, {css} from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  completed?: boolean;
  className?: string;
}

const StyledStepTie = styled.div<Props>`
  ${({ theme: { steps }, completed = false }) => {
    const colorType = completed ? "completed" : "waiting";

    return css`
      width: ${steps.stepTie.width};
      height: ${steps.stepTie.height};
      background: ${steps.stepTie.background[colorType]};
    `
  }}
`;
StyledStepTie.defaultProps = defaultProps

const StepTie = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledStepTie ref={ref} {...props} />
));

StepTie.displayName = "StepTie"

export { StepTie };
