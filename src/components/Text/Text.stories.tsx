import { text, radios } from "@storybook/addon-knobs";
import { TextContainer, TextProps } from "./TextContainer";
import { theme } from "@theme";

export default {
  component: TextContainer,
  title: "components/Text",
};

const tagOption = {
  span: "span",
  p: "p",
  div: "div",
};

const sizeOption = Object.keys(theme.text.size).reduce((obj, key) => {
  obj[key] = key;
  return obj;
}, {} as { [key: string]: string });

const colorOption = Object.keys(theme.text.color).reduce((obj, key) => {
  obj[key] = key;
  return obj;
}, {} as { [key: string]: string });

export const Text = (): React.ReactElement => (
  <TextContainer
    tag={radios("Tag", tagOption, "span") as keyof JSX.IntrinsicElements}
    size={radios("Size", sizeOption, "middle") as TextProps["size"]}
    color={radios("Color", colorOption, "default") as TextProps["color"]}
  >
    {text("Text", "text")}
  </TextContainer>
);
