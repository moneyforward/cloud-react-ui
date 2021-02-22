import styled, { css } from "styled-components";
import { HeadingProps } from "./HeadingContainer";
import { defaultProps } from "../../theme";

type HeadingPresenterProps = Omit<HeadingProps, "level"> & {
  tag: string;
};

const StyledHeading = styled(({ tag: Tag, ...rest }) => (
  <Tag {...rest} />
))<HeadingPresenterProps>`
  ${({ theme, size, weight, color }) => {
    const headingTheme = theme.heading;

    return css`
      font-size: ${headingTheme.fontSize[size || "middle"]};
      font-weight: ${headingTheme.fontWeight[weight || "default"]};
      color: ${headingTheme.color[color || "title"]};
    `;
  }}
`;
StyledHeading.defaultProps = defaultProps;

export function HeadingPresenter(
  props: HeadingPresenterProps
): React.ReactElement {
  return <StyledHeading {...props} />;
}
