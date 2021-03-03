import { text } from "@storybook/addon-knobs";
import { Box as BoxComponent, BoxProps } from "./Box";
import { Text } from "../Text";

export default {
  component: BoxComponent,
  title: "components/Box",
};

export const Box: React.FC = () => {
  const tag = text("tag", "div") as BoxProps["as"];
  const width = text("width", "300px");
  const height = text("height", "100px");
  const margin = text("margin", "50px");
  const padding = text("padding", "10px");

  return (
    <BoxComponent as={tag} width={width} height={height} m={margin} p={padding}>
      <Text>
        margin: {margin} padding: {padding}
      </Text>
    </BoxComponent>
  );
};
