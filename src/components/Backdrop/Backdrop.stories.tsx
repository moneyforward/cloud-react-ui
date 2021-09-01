import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Backdrop, Props } from './Backdrop';
import { Button } from '../Button';

export default {
  component: Backdrop,
  title: 'components/Backdrop',
} as Meta;

const Template: Story<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Backdrop open={open} onClick={() => setOpen(false)} />
      <Button onClick={() => setOpen(!open)}>Show Backdrop</Button>
    </>
  );
};

export const Default = Template.bind({});
