import styled, { css } from "styled-components";
import { HeadingProps } from "./HeadingContainer";
import { defaultProps } from "../../theme";

type HeadingPresenterProps = Omit<HeadingProps, "level"> & {
  tag: string;
};

const StyledHeading = styled(({ tag: Tag, ...rest }) => (
  <Tag {...rest} />
))<HeadingPresenterProps>`
  ${({ theme: { heading }, size, weight, color }) => css`
    font-size: ${heading.fontSize[size || "middle"]};
    font-weight: ${heading.fontWeight[weight || "default"]};
    color: ${heading.color[color || "title"]};
  `}
`;
StyledHeading.defaultProps = defaultProps;

export const HeadingPresenter: React.FC<HeadingPresenterProps> = (props) => {
  return <StyledHeading {...props} />;
};
