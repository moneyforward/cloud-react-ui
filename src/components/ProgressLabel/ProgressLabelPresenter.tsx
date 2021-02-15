import styled, { css } from "styled-components";
import { ProgressLabelProps } from "./ProgressLabelContainer";
import { defaultProps } from "@theme";

const StyledProgressLabel = styled.div<ProgressLabelProps>`
  ${({ theme, status = "inProgress" }) => {
    const progressLabelTheme = theme.progressLabel;

    return css`
      display: ${progressLabelTheme.display};
      width: ${progressLabelTheme.width};
      padding: ${progressLabelTheme.padding};
      background-color: ${progressLabelTheme.backgroundColor[status]};
      border-width: ${progressLabelTheme.borderWidth};
      border-style: ${progressLabelTheme.borderStyle};
      border-color: ${progressLabelTheme.borderColor[status]};
      border-radius: ${progressLabelTheme.borderRadius};
      font-size: ${progressLabelTheme.fontSize};
      color: ${progressLabelTheme.color[status]};
      letter-spacing: ${progressLabelTheme.letterSpacing};
    `;
  }}
`;
StyledProgressLabel.defaultProps = defaultProps;

export function ProgressLabelPresenter(
  props: ProgressLabelProps
): React.ReactElement {
  return <StyledProgressLabel {...props} />;
}
