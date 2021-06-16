import styled from "styled-components";
import {
  PaginationItem,
  PaginationPrev,
  PaginationNext,
} from "./PaginationItem";

export type PaginationProps = {
  children?: React.ReactNode;
  currentPage?: number;
};

const StyledPagination = styled.nav``;

const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const BasePagination = ({ children }: PaginationProps): JSX.Element => (
  <StyledPagination>
    <PaginationList>{children}</PaginationList>
  </StyledPagination>
);

export const Pagination = Object.assign(BasePagination, {
  Item: PaginationItem,
  Prev: PaginationPrev,
  Next: PaginationNext,
});
