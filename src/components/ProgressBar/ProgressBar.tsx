import { forwardRef } from "react";
import styled, {css} from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
}

const StyledProgressBar = styled.div<Props>`
  ${({ theme: { progressBar } }) => css`
  `}
`;
StyledProgressBar.defaultProps = defaultProps

const ProgressBar = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledProgressBar ref={ref} {...props} />
));

ProgressBar.displayName = "ProgressBar"


export { ProgressBar };
