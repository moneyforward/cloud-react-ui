import styled from "styled-components";

export const Block = styled.div`
  padding: 16px;

  & + & {
    border-top: 1px solid #d4d8dd;
  }
`;

Block.displayName = "Dropdown.Block";
