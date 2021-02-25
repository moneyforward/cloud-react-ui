import { text, radios } from "@storybook/addon-knobs";
import { HeadingContainer, HeadingProps } from "./HeadingContainer";
import { theme } from "../../theme";

export default {
  component: HeadingContainer,
  title: "components/Heading",
};

const levelOption = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6,
};

const sizeOption = Object.keys(theme.heading.fontSize).reduce((obj, key) => {
  obj[key] = key;
  return obj;
}, {} as { [key: string]: string });

const weightOption = Object.keys(theme.heading.fontWeight).reduce(
  (obj, key) => {
    obj[key] = key;
    return obj;
  },
  {} as { [key: string]: string }
);

const colorOption = Object.keys(theme.heading.color).reduce((obj, key) => {
  obj[key] = key;
  return obj;
}, {} as { [key: string]: string });

export const Heading: React.FC = () => (
  <HeadingContainer
    level={radios("level", levelOption, 1) as HeadingProps["level"]}
    size={radios("size", sizeOption, "middle") as HeadingProps["size"]}
    weight={radios("weight", weightOption, "default") as HeadingProps["weight"]}
    color={radios("color", colorOption, "title") as HeadingProps["color"]}
  >
    {text("Text", "Heading")}
  </HeadingContainer>
);
