import styled from "styled-components";

export const DropdownBlock = styled.div`
  padding: 16px;

  & + & {
    border-top: 1px solid #d4d8dd;
  }
`;

DropdownBlock.displayName = "Dropdown.Block";
