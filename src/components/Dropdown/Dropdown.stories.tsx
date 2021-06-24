import { Story, Meta } from "@storybook/react";
import { Dropdown, DropdownBodyProps } from "./Dropdown";
import { Link } from "../../components";
import styled from "styled-components";
import { useState } from "react";

export default {
  component: Dropdown,
  title: "Components/Dropdown",
} as Meta;

type Props = Pick<DropdownBodyProps, "placement">;

const StyledLink = styled(Link)`
  display: flex;
  padding: 8px 16px;
`;

const Template: Story<Props> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dropdown>
      <Dropdown.ToggleButton onClick={handleToggle} isOpen={isOpen}>
        ドロップダウン開閉
      </Dropdown.ToggleButton>
      <Dropdown.Body
        width="200px"
        isOpen={isOpen}
        placement={args["placement"]}
      >
        <Dropdown.Block role="list">
          <Dropdown.Item collapsed role="listitem" onClick={handleClose}>
            <StyledLink href="#">ユーザー設定</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item collapsed role="listitem" onClick={handleClose}>
            <StyledLink href="#">ユーザー設定</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item collapsed role="listitem" onClick={handleClose}>
            <StyledLink href="#">ユーザー設定</StyledLink>
          </Dropdown.Item>
        </Dropdown.Block>
      </Dropdown.Body>
    </Dropdown>
  );
};

export const Default = Template.bind({});
Default.args = { placement: "left" };

export const Placement = Template.bind({});
Placement.args = { placement: "right" };

const MultipleTemplate: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dropdown>
      <Dropdown.ToggleButton onClick={handleToggle} isOpen={isOpen}>
        ドロップダウン開閉
      </Dropdown.ToggleButton>
      <Dropdown.Body width="200px" isOpen={isOpen} placement="left">
        <Dropdown.Block>
          <Dropdown.Item>
            Blockを複数配置することで、内容を分割できます。
          </Dropdown.Item>
        </Dropdown.Block>
        <Dropdown.Block role="list">
          <Dropdown.Item collapsed role="listitem" onClick={handleClose}>
            <StyledLink href="#">ユーザー設定</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item collapsed role="listitem" onClick={handleClose}>
            <StyledLink href="#">ユーザー設定</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item collapsed role="listitem" onClick={handleClose}>
            <StyledLink href="#">ユーザー設定</StyledLink>
          </Dropdown.Item>
        </Dropdown.Block>
        <Dropdown.Block collapsed>
          <Dropdown.Item collapsed>
            collapsed オプションを使うことで余白を調整できます
          </Dropdown.Item>
        </Dropdown.Block>
      </Dropdown.Body>
    </Dropdown>
  );
};

export const MultipleBlock = MultipleTemplate.bind({});
