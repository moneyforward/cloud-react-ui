import styled from "styled-components";
import { PaginationItem } from "./PaginationItem";
import { PaginationPrev } from "./PaginationPrev";
import { PaginationLink } from "./PaginationLink";
import { PaginationNext } from "./PaginationNext";

export type PaginationProps = {
  children?: React.ReactNode;
  ariaLabel?: string;
};

const StyledPagination = styled.nav``;

const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const BasePagination = ({
  children,
  ariaLabel = "pagination",
  ...rest
}: PaginationProps): JSX.Element => (
  <StyledPagination aria-label={ariaLabel} {...rest}>
    <PaginationList>{children}</PaginationList>
  </StyledPagination>
);

export const Pagination = Object.assign(BasePagination, {
  Item: PaginationItem,
  Prev: PaginationPrev,
  Next: PaginationNext,
  Link: PaginationLink,
});
