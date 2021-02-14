import { BoxContainer } from "./BoxContainer";
import { Text } from "@components";

export default {
  component: BoxContainer,
  title: "components/Box",
};

export const Box = (): React.ReactElement => (
  <BoxContainer>
    <Text>ダミーテキスト</Text>
  </BoxContainer>
);
