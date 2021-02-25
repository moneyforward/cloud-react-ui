import { text, boolean } from "@storybook/addon-knobs";
import { CheckboxContainer } from "./CheckboxContainer";

export default {
  component: CheckboxContainer,
  title: "components/Checkbox",
};

export const Checkbox: React.FC = () => {
  const disabled = boolean("Disabled", false);
  const label = text("Text", "Checkbox");

  return (
    <>
      <div>
        <CheckboxContainer name="checkbox" disabled={disabled}>
          {label}
        </CheckboxContainer>
      </div>
      <div>
        <CheckboxContainer name="checkbox" disabled={disabled}>
          {label}
        </CheckboxContainer>
      </div>
    </>
  );
};
