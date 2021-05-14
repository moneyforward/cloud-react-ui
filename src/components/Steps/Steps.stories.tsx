import { Story, Meta } from '@storybook/react';
import { Steps } from "./Steps";
import { Step } from "./Step"
import { StepTie } from "./StepTie"

export default {
  component: Steps,
  title: "components/Steps"
} as Meta;

const Template: Story = () => {
  return (
    <Steps>
      <Step step={1} stepStatus="completed" title="hello" useCheck={false} />
      <StepTie completed />
      <Step step={2} stepStatus="inProgress" title="how are you" useCheck={true} />
      <StepTie />
      <Step step={3} stepStatus="waiting" title="good bye" useCheck={false} />
    </Steps>
  );
};

export const Sample = Template.bind({});
