import { text, radios, boolean } from "@storybook/addon-knobs";
import { ButtonContainer, ButtonProps } from "./ButtonContainer";

export default {
  component: ButtonContainer,
  title: "components/Button",
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

const iconOptions: { [key: string]: ButtonProps["icon"] } = {
  none: undefined,
  plus: "plus",
};

const iconPlacementOptions: { [key: string]: ButtonProps["iconPlacement"] } = {
  start: "start",
  end: "end",
};

export const Button: React.FC = () => (
  <ButtonContainer
    size={radios("Size", sizeOptions, "small") as ButtonProps["size"]}
    color={radios("Color", colorOptions, "default") as ButtonProps["color"]}
    disabled={boolean("Disabled", false)}
    icon={radios("Icon", iconOptions, undefined) as ButtonProps["icon"]}
    iconPlacement={
      radios(
        "IconPlacement",
        iconPlacementOptions,
        undefined
      ) as ButtonProps["iconPlacement"]
    }
    onClick={() => console.log("button clicked")}
  >
    {text("Button Text", "Button")}
  </ButtonContainer>
);
