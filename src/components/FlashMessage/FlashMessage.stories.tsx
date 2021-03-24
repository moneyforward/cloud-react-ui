import { text, radios } from "@storybook/addon-knobs";
import { FlashMessage as FlashMessageComponent, Props } from "./FlashMessage";

export default {
  component: FlashMessageComponent,
  title: "components/Flash Message",
};

const colorOptions = {
  success: "success",
  warning: "warning",
  error: "error",
};

export const FlashMessage = (): JSX.Element => (
  <FlashMessageComponent
    color={radios("Color", colorOptions, "success") as Props["color"]}
  >
    {text("Text", "Flash Message")}
  </FlashMessageComponent>
);
