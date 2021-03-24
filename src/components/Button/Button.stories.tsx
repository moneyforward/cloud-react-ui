import { text, radios, boolean } from "@storybook/addon-knobs";
import { Button as ButtonComponent, Props } from "./Button";

export default {
  component: ButtonComponent,
  title: "components/Button",
};

const sizeOptions: { [key: string]: Props["size"] } = {
  small: "small",
  medium: "medium",
  large: "large",
};

const colorOptions: { [key: string]: Props["color"] } = {
  default: "default",
  danger: "danger",
  primary: "primary",
  settings: "settings",
};

const iconOptions: { [key: string]: Props["icon"] } = {
  none: undefined,
  plus: "plus",
};

const iconPlacementOptions: { [key: string]: Props["iconPlacement"] } = {
  start: "start",
  end: "end",
};

export const Button: React.FC = () => (
  <ButtonComponent
    size={radios("Size", sizeOptions, "small") as Props["size"]}
    color={radios("Color", colorOptions, "default") as Props["color"]}
    disabled={boolean("Disabled", false)}
    icon={radios("Icon", iconOptions, undefined) as Props["icon"]}
    iconPlacement={
      radios(
        "IconPlacement",
        iconPlacementOptions,
        undefined
      ) as Props["iconPlacement"]
    }
    onClick={() => console.log("button clicked")}
  >
    {text("Button Text", "Button")}
  </ButtonComponent>
);
