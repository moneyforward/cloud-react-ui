import { text, radios } from "@storybook/addon-knobs";
import { TextContainer } from "./TextContainer";

export default {
  component: "Text",
  title: "Text",
};

const tagOption = {
  span: "span",
  p: "p",
  div: "div",
};

export const Text = (): React.ReactElement => (
  <TextContainer
    tag={radios("Tag", tagOption, "span") as keyof JSX.IntrinsicElements}
  >
    {text("Text", "")}
  </TextContainer>
);
