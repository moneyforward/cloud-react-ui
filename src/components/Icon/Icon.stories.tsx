import { number, radios, select } from "@storybook/addon-knobs";
import { IconContainer, Icons } from "./IconContainer";
import type { IconTypes, IconRotation, IconProps } from "./IconContainer";

export default {
  component: IconContainer,
  title: "components/Icon",
};

const iconOptions = Icons.reduce((obj, icon) => {
  obj[icon] = icon;
  return obj;
}, {} as { [key in IconTypes]: IconTypes });

const rotationOption = {
  range: true,
  min: 0,
  max: 270,
  step: 90,
};

const flipOption = {
  none: undefined,
  vertical: "vertical",
  horizontal: "horizontal",
  both: "both",
};

export const Icon = (): React.ReactElement => (
  <IconContainer
    icon={select("Icon", iconOptions, "bell")}
    rotation={number("Rotation", 0, rotationOption) as IconRotation}
    flip={radios("Flip", flipOption, "none") as IconProps["flip"]}
  />
);
