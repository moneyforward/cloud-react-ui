import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defaultProps } from "../../theme";

import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import type { IconProps, IconTypes } from "./IconContainer";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.icon.color};
  &:hover {
    color: ${(props) => props.theme.icon.hover.color};
  }
`;
StyledFontAwesomeIcon.defaultProps = defaultProps;

const FontAwesomeConverter: {
  [key in IconTypes]: FontAwesomeIconProps["icon"];
} = {
  bell: "bell",
  bullhorn: "bullhorn",
  caretUp: "caret-up",
  chevronUp: "chevron-up",
  plus: "plus",
  question: "question-circle",
  envelope: "envelope",
};

export function IconPresenter({
  width,
  height,
  icon,
  ...rest
}: IconProps): React.ReactElement {
  return (
    <StyledFontAwesomeIcon
      style={{ width, height }}
      icon={FontAwesomeConverter[icon]}
      {...rest}
    />
  );
}
