import { text, boolean } from "@storybook/addon-knobs";
import { TextFieldContainer } from "./TextFieldContainer";

export default {
  component: TextFieldContainer,
  title: "components/Text Field",
};

export const TextField: React.FC = () => (
  <TextFieldContainer
    placeholder={text("placeholder", "")}
    error={boolean("error", false)}
  />
);
