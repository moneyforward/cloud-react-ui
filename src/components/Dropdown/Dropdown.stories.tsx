import { Dropdown } from "./Dropdown";

export default {
  component: Dropdown,
  title: "Components/Dropdown",
};

export const Default: React.FC = () => (
  <Dropdown toggleLabel="ラベル">
    <Dropdown.Block>
      <Dropdown.Menu>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
        <Dropdown.MenuItemLink href="#">ユーザー設定</Dropdown.MenuItemLink>
      </Dropdown.Menu>
    </Dropdown.Block>
  </Dropdown>
);

export const Placement: React.FC = () => (
  <Dropdown toggleLabel="ラベル" placement="right">
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
  <Dropdown toggleLabel="ラベル">
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
