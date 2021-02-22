import React from "react";
import styled from "styled-components";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconProps, IconTypes } from "./IconContainer";
import { defaultProps } from "../../theme";

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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.theme.icon.fontSize};
  color: ${(props) => props.theme.icon.color};
  &:hover {
    color: ${(props) => props.theme.icon.hover.color};
  }
`;
StyledFontAwesomeIcon.defaultProps = defaultProps;

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
