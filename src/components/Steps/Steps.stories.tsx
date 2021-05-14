import { Story, Meta } from '@storybook/react';
import { Steps } from "./Steps";
import { StepTie } from "./StepTie"

export default {
  component: Steps,
  title: "components/Steps"
} as Meta;

const Template: Story = () => {
  return (
    <Steps>
      <StepTie completed />
      <StepTie />
    </Steps>
  );
};

export const Sample = Template.bind({});
