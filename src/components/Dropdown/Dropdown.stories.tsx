import { Story, Meta } from "@storybook/react";
import { Dropdown, DropdownProps } from "./Dropdown";
import { Link, Text } from "../../components";
import styled from "styled-components";

export default {
  component: Dropdown,
  title: "Components/Dropdown",
} as Meta;

const StyledText = styled(Text)`
  margin-bottom: 4px;
`;

const Template: Story<DropdownProps> = (args) => {
  return (
    <Dropdown {...args}>
      <Dropdown.Block role="list">
        <Dropdown.ActionItem role="listitem">
          <Link href="#">リンク</Link>
        </Dropdown.ActionItem>
        <Dropdown.ActionItem role="listitem">
          <Link href="#">
            <StyledText size="small" color="notes">
              注意書き
            </StyledText>
            リンク
          </Link>
        </Dropdown.ActionItem>
        <Dropdown.ActionItem role="listitem">
          <button>ボタン</button>
        </Dropdown.ActionItem>
        <Dropdown.ActionItem role="listitem" isKeepOpen>
          <Link href="#">リンク(isKeepOpen)</Link>
        </Dropdown.ActionItem>
      </Dropdown.Block>
    </Dropdown>
  );
};

export const Default = Template.bind({});
Default.args = { toggleLabel: "ドロップダウン開閉", placement: "left" };

export const Placement = Template.bind({});
Placement.args = {
  toggleLabel: "ドロップダウン開閉(placement: 'right')",
  placement: "right",
};

const MultipleTemplate: Story<DropdownProps> = (args) => {
  return (
    <Dropdown {...args}>
      <Dropdown.Block>
        <Dropdown.Item>
          Blockを複数配置することで、内容を分割できます。
        </Dropdown.Item>
      </Dropdown.Block>
      <Dropdown.Block role="list">
        <Dropdown.ActionItem role="listitem">
          <Link href="#">リンク</Link>
        </Dropdown.ActionItem>
        <Dropdown.ActionItem role="listitem">
          <Link href="#">リンク</Link>
        </Dropdown.ActionItem>
        <Dropdown.ActionItem role="listitem" isKeepOpen>
          <Link href="#">リンク(isKeepOpen)</Link>
        </Dropdown.ActionItem>
      </Dropdown.Block>
      <Dropdown.Block collapsed>
        <Dropdown.Item collapsed>
          Blockを複数配置することで、内容を分割できます。(collapsed)
        </Dropdown.Item>
      </Dropdown.Block>
    </Dropdown>
  );
};

export const MultipleBlock = MultipleTemplate.bind({});
MultipleBlock.args = { toggleLabel: "ドロップダウン開閉", placement: "left" };
