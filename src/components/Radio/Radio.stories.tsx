import styled from "styled-components";
import { text, boolean } from "@storybook/addon-knobs";
import { RadioContainer } from "./RadioContainer";
import { Text as TextComponent } from "../../components";

export default {
  component: RadioContainer,
  title: "components/Radio",
};

const Text = styled(TextComponent)`
  margin-left: 4px;
  margin-right: 10px;
`;

export const Radio: React.FC = () => {
  const disabled = boolean("Disabled", false);
  const label = text("Text", "Radio");

  return (
    <>
      <RadioContainer name="radio" disabled={disabled}>
        <Text>{label}</Text>
      </RadioContainer>
      <RadioContainer name="radio" disabled={disabled}>
        <Text>{label}</Text>
      </RadioContainer>
    </>
  );
};
