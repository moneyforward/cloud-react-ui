import { BlockContainer } from "./BlockContainer";
import { Text } from "../Text";

export default {
  component: BlockContainer,
  title: "components/Block",
};

export const Block: React.FC = () => (
  <BlockContainer>
    <Text>Block</Text>
  </BlockContainer>
);
