import styled from "styled-components";
import { color } from "../../theme";

export const DropdownBlock = styled.div`
  padding: 16px;

  & + & {
    border-top: 1px solid ${color.linkWater};
  }
`;

DropdownBlock.displayName = "Dropdown.Block";
