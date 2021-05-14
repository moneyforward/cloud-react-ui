import { Story, Meta } from '@storybook/react';
import { ProgressBar } from "./ProgressBar";
import { ProgressBarLine } from "./ProgressBarLine"

export default {
  component: ProgressBar,
  title: "components/ProgressBar"
};

const Template: Story = () => {
  return (
    <ProgressBar>
      <ProgressBarLine completed />
      <ProgressBarLine />
    </ProgressBar>
  );
};

export const Default = Template.bind({});
