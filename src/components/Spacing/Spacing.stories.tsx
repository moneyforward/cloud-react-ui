import { text } from "@storybook/addon-knobs";
import { Spacing as SpacingComponent, SpacingProps } from "./Spacing";
import { Text } from "../Text";

export default {
  component: SpacingComponent,
  title: "components/Spacing",
};

export const Spacing: React.FC = () => {
  const margin = text("margin", "50px");
  const padding = text("padding", "10px");
  const tag = text("tag", "div") as SpacingProps["as"];

  return (
    <SpacingComponent m={margin} p={padding} as={tag}>
      <Text>
        margin: {margin} padding: {padding}
      </Text>
    </SpacingComponent>
  );
};
