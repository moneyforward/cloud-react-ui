import React from "react";
import styled from "styled-components";
import { defaultProps } from "../../theme";

import type { TextProps } from "./TextContainer";

const StyledText = styled.span<TextProps>`
  font-size: ${({ theme, size }) => theme.text.size[size || "middle"]};
  color: ${({ theme, color }) => theme.text.color[color || "default"]};
`;
StyledText.defaultProps = defaultProps;

export function TextPresenter({
  tag = "span",
  ...rest
}: TextProps): React.ReactElement {
  return <StyledText as={tag} {...rest} />;
}
