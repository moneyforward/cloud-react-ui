import { Story, Meta } from '@storybook/react';
import { Radio, Props } from './Radio';
import styled from 'styled-components';

export default {
  component: Radio,
  title: 'components/Radio',
  argTypes: {
    onClick: { action: 'clicked' },
    onChange: { action: 'changed' },
  },
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta;

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Template: Story<Props> = ({ id, name, onClick, onChange, ...args }) => (
  <Wrapper>
    <Radio
      id="radio-1"
      name={name}
      onClick={onClick}
      onChange={onChange}
      {...args}
    >
      Radio 1
    </Radio>
    <Radio
      id="radio-2"
      name={name}
      onClick={onClick}
      onChange={onChange}
      value="second"
    >
      Radio 2
    </Radio>
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  value: 'value-1',
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, name: 'disabled' };
