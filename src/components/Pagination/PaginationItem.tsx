import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import { Icon } from "../../components";
import React, { forwardRef } from "react";
import { PaginationLink } from "./PaginationLink";

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

export type PaginationLinkProps = {
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  current?: boolean;
};

export const PaginationItem = ({
  children,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>{children}</StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Item";

export const PaginationPrev = forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ disabled }, ref) => (
  <PaginationLink ref={ref} disabled={disabled}>
    <Icon icon="chevronUp" rotation={270} />
  </PaginationLink>
));

PaginationPrev.displayName = "Pagination.Prev";

export const PaginationNext = forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ disabled }, ref) => (
  <PaginationLink ref={ref} disabled={disabled}>
    <Icon icon="chevronUp" rotation={90} />
  </PaginationLink>
));
PaginationNext.displayName = "Pagination.Next";
