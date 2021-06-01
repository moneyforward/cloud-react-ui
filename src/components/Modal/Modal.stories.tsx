import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { Text } from "../Text";
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
      <Modal open={open} maxWidth="sm" fullWidth onClose={handleClose}>
        <Modal.Header handleClose={handleClose}>ModalHeader</Modal.Header>
        <Modal.Content>ModalContent</Modal.Content>
        <Modal.Actions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="primary" type="button" >Action</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};
export const Default = Template.bind({});
