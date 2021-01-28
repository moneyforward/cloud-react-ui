import { text, radios, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import { ButtonContainer } from "./ButtonContainer";
import { Icon } from "../Icon";

import type { ButtonProps } from "./ButtonContainer";

export default {
  component: ButtonContainer,
  title: "Button",
};

const sizeOptions: { [key: string]: ButtonProps["size"] } = {
  small: "small",
  medium: "medium",
  large: "large",
};

const colorOptions: { [key: string]: ButtonProps["color"] } = {
  default: "default",
  danger: "danger",
  primary: "primary",
  settings: "settings",
};

export const Button = (): React.ReactElement => (
  <ButtonContainer
    size={radios("Size", sizeOptions, "small") as ButtonProps["size"]}
    color={radios("Color", colorOptions, "default") as ButtonProps["color"]}
    disabled={boolean("Disabled", false)}
  >
    {text("Button Text", "Text")}
  </ButtonContainer>
);

const StyledIcon = styled(Icon)`
  && {
    padding-right: 4px;
    font-size: 12px;
    width: 14px;
  }
`;

export const ButtonWithIcon = (): React.ReactElement => (
  <ButtonContainer
    size={radios("Size", sizeOptions, "small") as ButtonProps["size"]}
    color={radios("Color", colorOptions, "default") as ButtonProps["color"]}
    disabled={boolean("Disabled", false)}
  >
    <StyledIcon icon="plus" />
    {text("Button Text", "Text")}
  </ButtonContainer>
);
