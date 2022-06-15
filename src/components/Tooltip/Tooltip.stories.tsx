import { Story, Meta } from '@storybook/react';
import { Tooltip, TooltipProps as Props } from './Tooltip';
import { Icon } from '../Icon';
import styled from 'styled-components';

export default {
  component: Tooltip,
  title: 'components/Tooltip',
} as Meta;

const Template: Story<Props> = ({ title = 'tooltip', ...rest }) => (
  <div style={{ marginTop: '100px', marginLeft: '100px' }}>
    <Tooltip title={title} {...rest}>
      <Icon icon="bell" />
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = { title: 'tooltip', id: 'tooltip-id' };

export const Custom = Template.bind({});
Custom.args = {
  title: (
    <span>
      hello
      <br />
      tooltip
    </span>
  ),
  id: 'tooltip-id',
  placement: 'top',
};
