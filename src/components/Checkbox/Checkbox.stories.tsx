import styled from "styled-components";
import { text, boolean } from "@storybook/addon-knobs";
import { CheckboxContainer } from "./CheckboxContainer";
import { Text as TextComponent } from "../../components";

export default {
  component: CheckboxContainer,
  title: "components/Checkbox",
};

const Text = styled(TextComponent)`
  margin-left: 4px;
  margin-right: 10px;
`;

export const Checkbox: React.FC = () => {
  const disabled = boolean("Disabled", false);
  const label = text("Text", "Checkbox");

  return (
    <>
      <CheckboxContainer name="checkbox" disabled={disabled}>
        <Text>{label}</Text>
      </CheckboxContainer>
      <CheckboxContainer name="checkbox" disabled={disabled}>
        <Text>{label}</Text>
      </CheckboxContainer>
    </>
  );
};
