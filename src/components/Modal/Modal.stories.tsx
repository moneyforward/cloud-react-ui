import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalContent } from "./ModalContent";
import { ModalActions } from "./ModalActions";
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
        <ModalHeader handleClose={handleClose}>test</ModalHeader>
        <ModalContent>hello</ModalContent>
        <ModalActions>
          <Button onClick={handleClose}>test</Button>
          <Button>test</Button>
        </ModalActions>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});

