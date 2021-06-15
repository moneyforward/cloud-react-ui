import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import { Icon } from "../../components";

export type PaginationItemProps = {
  href?: string;
  linkComponent?: React.ReactNode;
  page?: number;
  disabled?: boolean;
};

const StyledPaginationItem = styled.li`
  background-color: #fff;
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

    svg {
      color: inherit;
      fill: currentColor;
    }
  }
`;

StyledPaginationItem.defaultProps = defaultProps;

export const PaginationItem = ({
  href,
  page,
  disabled,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>
    <a href={href} aria-disabled={disabled && true}>
      {page}
    </a>
  </StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Item";

export const PaginationPrev = ({
  href,
  disabled,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>
    <a href={href} aria-disabled={disabled && true}>
      <Icon icon="chevronUp" rotation={270}></Icon>
    </a>
  </StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Prev";

export const PaginationNext = ({
  href,
  disabled,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>
    <a href={href} aria-disabled={disabled && true}>
      <Icon icon="chevronUp" rotation={90}></Icon>
    </a>
  </StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Next";
