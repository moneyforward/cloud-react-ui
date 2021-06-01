import { Story, Meta } from "@storybook/react";
import { Dropdown, DropdownProps } from "./Dropdown";
import { Link } from "../../components";

export default {
  component: Dropdown,
  title: "Components/Dropdown",
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <Dropdown.Block>
      <Dropdown.Menu>
        <Dropdown.MenuItem><Link href="#">ユーザー設定</Link></Dropdown.MenuItem>
        <Dropdown.MenuItem><Link href="#">ユーザー設定</Link></Dropdown.MenuItem>
        <Dropdown.MenuItem><Link href="#">ユーザー設定</Link></Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown.Block>
  </Dropdown>
);

export const Default = Template.bind({});
Default.args = { toggleLabel: "ラベル" };

export const Placement = Template.bind({});
Placement.args = {
  toggleLabel: "ラベル(placement: right)",
  placement: "right",
};

const MultipleTemplate: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <Dropdown.Block>
      Blockを複数配置することで、内容を分割できます。
    </Dropdown.Block>
    <Dropdown.Block>
      <Dropdown.Menu>
        <Dropdown.MenuItem><Link href="#">ユーザー設定</Link></Dropdown.MenuItem>
        <Dropdown.MenuItem><Link href="#">ユーザー設定</Link></Dropdown.MenuItem>
        <Dropdown.MenuItem><Link href="#">ユーザー設定</Link></Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown.Block>
    <Dropdown.Block>
      Blockを複数配置することで、内容を分割できます。
    </Dropdown.Block>
  </Dropdown>
);

export const MultipleBlock = MultipleTemplate.bind({});
MultipleBlock.args = { toggleLabel: "ラベル" };
