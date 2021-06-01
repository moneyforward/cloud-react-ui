import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button";

export default {
  component: Modal,
  title: "components/Modal",
} as Meta;

const Template: Story = () => {
  const [open, setOpen] = useState(false);
  const  handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Show Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Modal.Header handleClose={handleClose}>test</Modal.Header>
        <Modal.Content>hello</Modal.Content>
        <Modal.Actions>
          <Button onClick={handleClose}>test</Button>
          <Button>test</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});

