import React from "react";
import styled from "styled-components";

import type { TextProps } from "./TextContainer";

const StyledText = styled.span<TextProps>``;

export function TextPresenter({
  tag = "span",
  ...rest
}: TextProps): React.ReactElement {
  return <StyledText as={tag} {...rest} />;
}
