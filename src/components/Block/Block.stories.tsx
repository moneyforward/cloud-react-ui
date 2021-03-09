import { boolean } from "@storybook/addon-knobs";
import { Block as BlockComponent } from "./Block";
import { Text } from "../Text";

export default {
  component: BlockComponent,
  title: "components/Block",
};

export const Block = (): JSX.Element => (
  <BlockComponent border={boolean("border", false)}>
    <Text>Block</Text>
  </BlockComponent>
);
