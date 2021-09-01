import styled from 'styled-components';
import { Story, Meta, Args } from '@storybook/react';
import { Notification, NotificationProps } from './Notification';

export default {
  component: Notification,
  title: 'components/Notification',
} as Meta;

const Wrapper = styled.div`
  > * + * {
    margin-top: 24px;
  }
`;

const Template: Story = ({ text, ...rest }: Args) => (
  <Wrapper>
    <Notification {...rest}>{text}</Notification>
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  text: 'dummy text',
  isOpen: true,
  color: 'success',
  align: 'center',
};
