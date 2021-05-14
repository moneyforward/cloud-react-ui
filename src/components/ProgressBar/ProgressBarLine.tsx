import { forwardRef } from "react";
import styled, {css} from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  completed?: boolean;
  className?: string;
}

const StyledProgressBarLine = styled.div<Props>`
  ${({ theme: { progressBar }, completed = false }) => css`
    width: ${progressBar.progressBarLine.width};
    height: ${progressBar.progressBarLine.height};
    background: ${completed ? progressBar.progressBarLine.background["completed"] : progressBar.progressBarLine.background["waiting"]};
  `}
`;
StyledProgressBarLine.defaultProps = defaultProps

const ProgressBarLine = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledProgressBarLine ref={ref} {...props} />
));

ProgressBarLine.displayName = "ProgressBarLine"

export { ProgressBarLine };
