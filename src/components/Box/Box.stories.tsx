import { BoxContainer } from "./BoxContainer";
import { Text } from "../Text";

export default {
  component: BoxContainer,
  title: "components/Box",
};

export const Box: React.FC = () => (
  <BoxContainer>
    <Text>Box</Text>
  </BoxContainer>
);
