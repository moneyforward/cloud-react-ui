import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type PaginationLinkProps = {
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
  current?: boolean;
};

export const PaginationLink = styled.a.attrs<PaginationLinkProps>(
  ({ disabled, current, href }) => ({
    "aria-current": current && "page",
    "aria-disabled": disabled,
    tabIndex: disabled ? -1 : 0,
    href: disabled ? undefined : href,
  })
)<PaginationLinkProps>`
  ${({ theme: { link } }) =>
    css`
      color: ${link.color};
    `}

  display: inline-block;
  text-decoration: none;
  padding: 5px 14px;
  border-radius: inherit;
  background-color: #fff;

  &:hover {
    color: #fff;
    ${({ theme: { link } }) =>
      css`
        background-color: ${link.color};
      `}
  }

  &[aria-disabled="true"] {
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
