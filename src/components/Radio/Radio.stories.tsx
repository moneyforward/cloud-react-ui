import styled from "styled-components";
import { text, boolean } from "@storybook/addon-knobs";
import { Radio as RadioComponent } from "./Radio";
import { Text as TextComponent } from "../../components";

export default {
  component: RadioComponent,
  title: "components/Radio",
};

const Text = styled(TextComponent)`
  margin-left: 4px;
  margin-right: 10px;
`;

export const Radio = (): JSX.Element => {
  const disabled = boolean("Disabled", false);
  const label = text("Text", "Radio");

  return (
    <>
      <RadioComponent name="radio" disabled={disabled}>
        <Text>{label}</Text>
      </RadioComponent>
      <RadioComponent name="radio" disabled={disabled}>
        <Text>{label}</Text>
      </RadioComponent>
    </>
  );
};
