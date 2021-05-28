import { Story, Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";

export default {
  component: Modal,
  title: "components/Modal",
} as Meta;

const Template: Story = () => {
  return (
    <Modal open fullWidth>
      <ModalHeader>test</ModalHeader>
      <p>test</p>
    </Modal>
  );
};

export const Default = Template.bind({});
