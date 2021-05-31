import { Story, Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalContent } from "./ModalContent";

export default {
  component: Modal,
  title: "components/Modal",
} as Meta;

const Template: Story = () => {
  return (
    <Modal open fullWidth>
      <ModalHeader>test</ModalHeader>
      <ModalContent>hello</ModalContent>
    </Modal>
  );
};

export const Default = Template.bind({});
