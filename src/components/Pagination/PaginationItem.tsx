import styled from "styled-components";
import { defaultProps } from "../../theme";
import React from "react";

export type PaginationItemProps = {
  href?: string;
  page?: number;
  disabled?: boolean;
  children?: React.ReactNode;
  current?: boolean;
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

StyledPaginationItem.defaultProps = defaultProps;

export const PaginationItem = ({
  children,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>{children}</StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Item";
