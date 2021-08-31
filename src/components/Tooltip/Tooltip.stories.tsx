import { Story, Meta } from "@storybook/react";
import {
  TooltipContainer as Tooltip,
  TooltipProps as Props,
} from "./TooltipContainer";
import { Icon } from "../Icon";

export default {
  component: Tooltip,
  title: "components/Tooltip",
} as Meta;

const Template: Story<Props> = ({ message = "tooltip", ...rest }) => (
  <div style={{ marginTop: "100px", marginLeft: "100px" }}>
    <Tooltip message={message} {...rest}>
      <Icon icon="bell" />
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = { message: 'tooltip', id: 'tooltip-id' }
