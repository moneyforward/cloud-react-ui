import { boolean } from "@storybook/addon-knobs";
import { BlockContainer } from "./BlockContainer";
import { Text } from "../Text";

export default {
  component: BlockContainer,
  title: "components/Block",
};

export const Block: React.FC = () => (
  <BlockContainer border={boolean("border", true)}>
    <Text>Block</Text>
  </BlockContainer>
);
