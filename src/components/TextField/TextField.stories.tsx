import { text, boolean } from "@storybook/addon-knobs";
import { TextField as TextFieldComponent } from "./TextField";

export default {
  component: TextFieldComponent,
  title: "components/Text Field",
};

export const TextField = (): JSX.Element => (
  <TextFieldComponent
    placeholder={text("placeholder", "")}
    error={boolean("error", false)}
  />
);
