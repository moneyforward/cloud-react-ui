import { Story, Meta } from "@storybook/react";
import { Modal } from "./Modal";

export default {
  component: Modal,
  title: "components/Modal",
} as Meta;

const Template: Story = () => {
  return (
    <Modal open>
      <p>test</p>
    </Modal>
  );
};

export const Default = Template.bind({});
