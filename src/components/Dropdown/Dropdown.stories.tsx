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

const Template: Story<DropdownProps> = (args) => {
  return (
    <Dropdown {...args}>
      <Dropdown.Block role="list">
        <Dropdown.Item collapsed role="listitem">
          <StyledLink href="#">リンク</StyledLink>
        </Dropdown.Item>
        <Dropdown.Item collapsed role="listitem">
          <StyledLink href="#">リンク</StyledLink>
        </Dropdown.Item>
        <Dropdown.Item collapsed role="listitem" isKeepOpen>
          <StyledLink href="#">リンク(isKeepOpen)</StyledLink>
        </Dropdown.Item>
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
        <Dropdown.Item isKeepOpen>
          Blockを複数配置することで、内容を分割できます。
        </Dropdown.Item>
      </Dropdown.Block>
      <Dropdown.Block role="list">
        <Dropdown.Item collapsed role="listitem">
          <StyledLink href="#">リンク</StyledLink>
        </Dropdown.Item>
        <Dropdown.Item collapsed role="listitem">
          <StyledLink href="#">リンク</StyledLink>
        </Dropdown.Item>
        <Dropdown.Item collapsed role="listitem" isKeepOpen>
          <StyledLink href="#">リンク(isKeepOpen)</StyledLink>
        </Dropdown.Item>
      </Dropdown.Block>
      <Dropdown.Block collapsed>
        <Dropdown.Item collapsed isKeepOpen>
          collapsed オプションを使うことで余白を調整できます。
          <br />
          isKeepOpen
          オプションを使うことで、クリックしてもドロップダウンが閉じなくなります。
        </Dropdown.Item>
      </Dropdown.Block>
    </Dropdown>
  );
};

export const MultipleBlock = MultipleTemplate.bind({});
MultipleBlock.args = { toggleLabel: "ドロップダウン開閉", placement: "left" };
