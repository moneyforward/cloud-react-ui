import { text, radios, boolean } from "@storybook/addon-knobs";
import { StatusLabel as StatusLabelComponent, Props } from "./StatusLabel";

export default {
  component: StatusLabelComponent,
  title: "components/Status Label",
};

const colorOptions = {
  red: "red",
  gray: "gray",
  green: "green",
  orange: "orange",
  blue: "blue",
};

export const StatusLabel = (): JSX.Element => (
  <StatusLabelComponent
    color={radios("Color", colorOptions, "gray") as Props["color"]}
    bold={boolean("Bold", false)}
    outline={boolean("Outline", false)}
  >
    {text("Text", "Status")}
  </StatusLabelComponent>
);
