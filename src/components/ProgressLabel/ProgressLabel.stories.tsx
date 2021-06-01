import { Story, Meta } from "@storybook/react";
import {
  ProgressLabelContainer as ProgressLabel,
  ProgressLabelProps as Props,
} from "./ProgressLabelContainer";

export default {
  component: ProgressLabel,
  title: "components/ProgressLabel",
} as Meta;

const Template: Story<Props> = (args) => (
  <ProgressLabel {...args}>ステップ1</ProgressLabel>
);

export const Waiting = Template.bind({});
Waiting.args = { status: "waiting" };

export const InProgress = Template.bind({});
InProgress.args = { status: "inProgress" };

export const Completed = Template.bind({});
Completed.args = { status: "completed" };
