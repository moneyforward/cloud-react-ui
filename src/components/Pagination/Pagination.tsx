import styled from 'styled-components';
import { PaginationItem } from './PaginationItem';

export type PaginationProps = {
  children?: React.ReactNode;
};

const StyledPagination = styled.nav``;

const PaginationList = styled.ul``;

const BasePagination = ({ children }: PaginationProps): JSX.Element => (
  <StyledPagination>
    <PaginationList>{children}</PaginationList>
  </StyledPagination>
);

export const Pagination = Object.assign(BasePagination, {
  Item: PaginationItem,
});
