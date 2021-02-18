import { text, boolean } from "@storybook/addon-knobs";
import { CheckboxContainer } from "./CheckboxContainer";

export default {
  component: CheckboxContainer,
  title: "components/Checkbox",
};

export const Checkbox = (): React.ReactElement => (
  <CheckboxContainer disabled={boolean("Disabled", false)}>
    {text("Text", "Checkbox")}
  </CheckboxContainer>
);
