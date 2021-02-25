import styled, { css } from "styled-components";
import { ProgressLabelProps } from "./ProgressLabelContainer";
import { defaultProps } from "../../theme";

const StyledProgressLabel = styled.div<ProgressLabelProps>`
  ${({ theme: { progressLabel }, status = "inProgress" }) => css`
    display: ${progressLabel.display};
    width: ${progressLabel.width};
    padding: ${progressLabel.padding};
    background-color: ${progressLabel.backgroundColor[status]};
    border-width: ${progressLabel.borderWidth};
    border-style: ${progressLabel.borderStyle};
    border-color: ${progressLabel.borderColor[status]};
    border-radius: ${progressLabel.borderRadius};
    font-size: ${progressLabel.fontSize};
    color: ${progressLabel.color[status]};
    letter-spacing: ${progressLabel.letterSpacing};
    box-sizing: border-box;
  `}
`;
StyledProgressLabel.defaultProps = defaultProps;

export const ProgressLabelPresenter: React.FC<ProgressLabelProps> = (props) => {
  return <StyledProgressLabel {...props} />;
};
