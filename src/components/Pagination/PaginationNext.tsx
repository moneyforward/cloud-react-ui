import { forwardRef } from "react";
import { Icon } from "../../components";
import { PaginationLink } from "./PaginationLink";

export type PaginationNextProps = {
  href?: string;
  disabled?: boolean;
};

export const PaginationNext = forwardRef<
  HTMLAnchorElement,
  PaginationNextProps
>(({ href, disabled, ...rest }, ref) => (
  <PaginationLink
    aria-label="次のページ"
    href={href}
    ref={ref}
    disabled={disabled}
    {...rest}
  >
    <Icon icon="chevronUp" rotation={90} />
  </PaginationLink>
));

PaginationNext.displayName = "Pagination.Next";
