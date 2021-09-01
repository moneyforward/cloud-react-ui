import { Story, Meta } from '@storybook/react';
import { Steps, Props } from './Steps';
import { Step } from './Step';
import { StepTie } from './StepTie';

export default {
  component: Steps,
  title: 'components/Steps',
} as Meta;

const Template: Story<Props> = ({ mode }) => (
  <Steps mode={mode}>
    <Step step={1} stepStatus="completed" title="hello" />
    <StepTie completed />
    <Step step={2} stepStatus="inProgress" title="how are you" />
    <StepTie />
    <Step step={3} stepStatus="waiting" title="good bye" />
  </Steps>
);

export const Checked = Template.bind({});
Checked.args = { mode: 'check' };

export const Number = Template.bind({});
Number.args = { mode: 'number' };
