import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import { Icon } from "../../components";
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
  background-color: #fff;

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  &:last-of-type {
    border-right-width: 1px;
    border-radius: 0 4px 4px 0;
  }

  a {
    ${({ theme: { link } }) =>
      css`
        color: ${link.color};
      `}

    display: inline-block;
    text-decoration: none;
    padding: 8px 14px;

    &[aria-disabled] {
      pointer-events: none;
      cursor: auto;
      color: #d8dade;
    }

    &[aria-current] {
      color: #333;
      font-weight: bold;
    }

    svg {
      color: inherit;
      fill: currentColor;
    }
  }
`;

StyledPaginationItem.defaultProps = defaultProps;

export type PaginationLinkProps = {
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  current?: boolean;
};

export const Link = ({
  href,
  disabled,
  children,
  current,
  ...rest
}: PaginationLinkProps): JSX.Element => {
  return (
    <a
      href={href}
      aria-disabled={disabled && true}
      tabIndex={disabled ? -1 : 0}
      aria-current={current && "page"}
      {...rest}
    >
      {children}
    </a>
  );
};

export const PaginationItem = ({
  href,
  page,
  disabled,
  children,
  current,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>
    <Link href={href} disabled={disabled} current={current}>
      {page}
    </Link>
  </StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Item";

export const PaginationPrev = ({
  href,
  disabled,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>
    <Link href={href} disabled={disabled}>
      <Icon icon="chevronUp" rotation={270}></Icon>
    </Link>
  </StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Prev";

export const PaginationNext = ({
  href,
  disabled,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>
    <Link href={href} disabled={disabled}>
      <Icon icon="chevronUp" rotation={90}></Icon>
    </Link>
  </StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Next";
