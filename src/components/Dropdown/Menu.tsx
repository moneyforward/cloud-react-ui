import styled from "styled-components";
import { theme } from "../../theme";

type MenuItemProps = {
  children: React.ReactNode;
};

type MenuProps = {
  children: React.ReactNode;
};

const StyledMenu = styled.div`
  /* Dropdown.Blockのpaddingに対して、上下スペースが16pxに見えるように調整 */
  margin-top: -8px;
  margin-bottom: -8px;

  ul {
    padding: 0;
    margin: 0;
  }
`;

export const Menu = ({ children }: MenuProps) => (
  <StyledMenu>
    <ul>{children}</ul>
  </StyledMenu>
);

Menu.displayName = "Dropdown.Menu";

const StyledMenuItem = styled.li`
  list-style: none;
  font-size: ${theme.text.size.middle};
  padding: 0;
  margin: 0;

  // 下層のリンク要素のClickable領域を広げる
  // 現状はリンクを前提としたスタイルとなっている。
  // https://github.com/moneyforward/cloud-react-ui/pull/68#discussion_r642748112
  a {
    display: inline-block;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    color: #333;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const MenuItem = ({ children }: MenuItemProps) => (
  <StyledMenuItem>
    {children}
  </StyledMenuItem>
);

MenuItem.displayName = "Dropdown.MenuItem";
