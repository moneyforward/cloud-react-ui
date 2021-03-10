import styled from "styled-components";
import { text, boolean } from "@storybook/addon-knobs";
import { Checkbox as CheckboxComponent } from "./Checkbox";
import { Text as TextComponent } from "../../components";

export default {
  component: CheckboxComponent,
  title: "components/Checkbox",
};

const Text = styled(TextComponent)`
  margin-left: 4px;
  margin-right: 10px;
`;

export const Checkbox = (): JSX.Element => {
  const disabled = boolean("Disabled", false);
  const label = text("Text", "Checkbox");

  return (
    <>
      <CheckboxComponent name="checkbox" disabled={disabled}>
        <Text>{label}</Text>
      </CheckboxComponent>
      <CheckboxComponent name="checkbox" disabled={disabled}>
        <Text>{label}</Text>
      </CheckboxComponent>
    </>
  );
};
