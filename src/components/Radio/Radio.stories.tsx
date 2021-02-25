import { text, boolean } from "@storybook/addon-knobs";
import { RadioContainer } from "./RadioContainer";

export default {
  component: RadioContainer,
  title: "components/Radio",
};

export const Radio: React.FC = () => {
  const disabled = boolean("Disabled", false);
  const label = text("Text", "Radio");

  return (
    <>
      <div>
        <RadioContainer name="radio" disabled={disabled}>
          {label}
        </RadioContainer>
      </div>
      <div>
        <RadioContainer name="radio" disabled={disabled}>
          {label}
        </RadioContainer>
      </div>
    </>
  );
};
