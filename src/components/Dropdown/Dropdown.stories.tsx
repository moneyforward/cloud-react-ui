import { Dropdown } from "./Dropdown";

export default {
  component: Dropdown,
  title: "ui/Dropdown",
  parameters: {
    backgrounds: {
      default: "biz-pay",
    },
  },
};

export const Default: React.FC = () => (
  <Dropdown toggleLabel="ここをクリック">
    <Dropdown.Block>
      <Dropdown.Menu>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
      </Dropdown.Menu>
    </Dropdown.Block>
  </Dropdown>
);

export const Align: React.FC = () => (
  <Dropdown toggleLabel="ここをクリック" placement="right">
    <Dropdown.Block>
      <Dropdown.Menu>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
      </Dropdown.Menu>
    </Dropdown.Block>
  </Dropdown>
);

export const MultipleBlock: React.FC = () => (
  <Dropdown toggleLabel="ここをクリック">
    <Dropdown.Block>
      Blockを複数配置することで、内容を分割できます。
    </Dropdown.Block>
    <Dropdown.Block>
      <Dropdown.Menu>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
      </Dropdown.Menu>
    </Dropdown.Block>
    <Dropdown.Block>
      Blockを複数配置することで、内容を分割できます。
    </Dropdown.Block>
  </Dropdown>
);
