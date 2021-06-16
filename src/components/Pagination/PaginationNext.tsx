import { forwardRef } from "react";
import { Icon } from "../../components";
import { PaginationLink, PaginationLinkProps } from "./PaginationLink";

export const PaginationNext = forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ href, disabled, ...rest }, ref) => (
  <PaginationLink href={href} ref={ref} disabled={disabled} {...rest}>
    <Icon icon="chevronUp" rotation={90} />
  </PaginationLink>
));

PaginationNext.displayName = "Pagination.Next";
