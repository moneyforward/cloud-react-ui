import { Story, Meta } from '@storybook/react';
import { CircularProgress, Props } from './CircularProgress';

export default {
  component: CircularProgress,
  title: 'components/CircularProgress',
} as Meta;

const Template: Story<Props> = (args) => <CircularProgress {...args} />;

export const Default = Template.bind({});
