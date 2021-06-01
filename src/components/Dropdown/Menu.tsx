import styled from "styled-components";
import { theme } from "../../theme";
import { Link } from "../../components";
// import NextLink from 'next/link';

type MenuItemLinkProps = {
  children: React.ReactNode;
  href: string;
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

const StyledMenuItemLink = styled.li`
  list-style: none;
  font-size: ${theme.text.size.middle};
  padding: 0;
  margin: 0;

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

export const MenuItemLink = ({ children, href }: MenuItemLinkProps) => (
  <StyledMenuItemLink>
    <Link>{children}</Link>
  </StyledMenuItemLink>
);

MenuItemLink.displayName = "Dropdown.MenuItemLink";
