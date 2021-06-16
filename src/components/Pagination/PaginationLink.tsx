import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type PaginationLinkProps = {
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  current?: boolean;
};

export const PaginationLink = styled.a.attrs<PaginationLinkProps>(
  ({ disabled, current }) => ({
    "aria-disabled": disabled,
    "aria-current": current && "page",
    tabIndex: disabled ? -1 : 0,
  })
)<PaginationLinkProps>`
  ${({ theme: { link } }) =>
    css`
      color: ${link.color};
    `}

  display: inline-block;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: inherit;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #5176ae;
  }

  &[aria-disabled] {
    pointer-events: none;
    cursor: auto;
    color: #d8dade;
  }

  &[aria-current] {
    color: #333;
    font-weight: bold;
    background-color: #fafafa;
  }

  svg,
  svg:hover {
    color: inherit;
    fill: currentColor;
  }
`;

PaginationLink.defaultProps = defaultProps;
PaginationLink.displayName = "Pagination.Link";
