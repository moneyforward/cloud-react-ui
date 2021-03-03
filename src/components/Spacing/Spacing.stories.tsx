import { text } from "@storybook/addon-knobs";
import { Spacing as SpacingComponent } from "./Spacing";
import { Text } from "../Text";

export default {
  component: SpacingComponent,
  title: "components/Spacing",
};

export const Spacing: React.FC = () => {
  const margin = text("margin", "50px");
  const padding = text("padding", "10px");

  return (
    <SpacingComponent m={margin} p={padding}>
      <Text>
        margin: {margin} padding: {padding}
      </Text>
    </SpacingComponent>
  );
};
