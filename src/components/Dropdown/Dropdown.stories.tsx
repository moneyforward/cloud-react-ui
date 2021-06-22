import { Story, Meta } from "@storybook/react";
import { Dropdown, DropdownProps } from "./Dropdown";
import { Link } from "../../components";
import styled from "styled-components";

export default {
  component: Dropdown,
  title: "Components/Dropdown",
} as Meta;

const StyledLink = styled(Link)`
  display: flex;
  padding: 8px 16px;
`;

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <Dropdown.Block>
      <Dropdown.Item collapsed>
        <StyledLink href="#">ユーザー設定</StyledLink>
      </Dropdown.Item>
      <Dropdown.Item collapsed>
        <StyledLink href="#">ユーザー設定</StyledLink>
      </Dropdown.Item>
      <Dropdown.Item collapsed>
        <StyledLink href="#">ユーザー設定</StyledLink>
      </Dropdown.Item>
    </Dropdown.Block>
  </Dropdown>
);

export const Default = Template.bind({});
Default.args = { toggleLabel: "ラベル", width: "200px" };

export const Placement = Template.bind({});
Placement.args = {
  toggleLabel: "ラベル(placement: right)",
  placement: "right",
};

const MultipleTemplate: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <Dropdown.Block>
      <Dropdown.Item>
        Blockを複数配置することで、内容を分割できます。
      </Dropdown.Item>
    </Dropdown.Block>
    <Dropdown.Block>
      <Dropdown.Item collapsed>
        <StyledLink href="#">ユーザー設定</StyledLink>
      </Dropdown.Item>
      <Dropdown.Item collapsed>
        <StyledLink href="#">ユーザー設定</StyledLink>
      </Dropdown.Item>
      <Dropdown.Item collapsed>
        <StyledLink href="#">ユーザー設定</StyledLink>
      </Dropdown.Item>
    </Dropdown.Block>
    <Dropdown.Block collapsed>
      <Dropdown.Item collapsed>
        collapsedオプションがあれば余白を調整できます。
      </Dropdown.Item>
    </Dropdown.Block>
  </Dropdown>
);

export const MultipleBlock = MultipleTemplate.bind({});
MultipleBlock.args = { toggleLabel: "ラベル" };
