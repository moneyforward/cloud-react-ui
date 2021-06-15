import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import { Icon } from "../../components";

export type PaginationItemProps = {
  href?: string;
  linkComponent?: React.ReactNode;
  label: string;
  disabled?: boolean;
};

const StyledPaginationItem = styled.li`
  background-color: #fff;
  border-top: 1px solid #c5cbcf;
  border-bottom: 1px solid #c5cbcf;
  border-left: 1px solid #c5cbcf;

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  &:last-of-type {
    border-right: 1px solid #c5cbcf;
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
  }
`;

StyledPaginationItem.defaultProps = defaultProps;

export const PaginationItem = ({
  href,
  label,
  disabled,
}: PaginationItemProps): JSX.Element => (
  <StyledPaginationItem>
    <a href={href} aria-disabled={disabled && true}>
      {label}
    </a>
  </StyledPaginationItem>
);

PaginationItem.displayName = "Pagination.Item";
