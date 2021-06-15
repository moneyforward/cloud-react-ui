import styled from "styled-components";
import NextLink from "next/link";

export type PaginationItemProps = {
  children: React.ReactNode;
  href: string;
};

const StyledPaginationItem = styled.li``;

export const PaginationItem = ({
  children,
  href,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>
    <NextLink href={href}>{children}</NextLink>
  </StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Item";
