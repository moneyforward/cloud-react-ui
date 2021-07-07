import styled from "styled-components";
import React from "react";

export type PaginationItemProps = {
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  children: React.ReactNode;
};

const StyledPaginationItem = styled.li`
  border-color: #c5cbcf;
  border-style: solid;
  border-width: 1px 0 1px 1px;

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  &:last-of-type {
    border-right-width: 1px;
    border-radius: 0 4px 4px 0;
  }
`;

export const PaginationItem = (props: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem {...props} />
);

PaginationItem.displayName = "Pagination.Item";
