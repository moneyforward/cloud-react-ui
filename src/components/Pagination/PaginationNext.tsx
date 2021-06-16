import { forwardRef } from "react";
import { Icon } from "../../components";
import { PaginationLink, PaginationLinkProps } from "./PaginationLink";

export const PaginationNext = forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ disabled }, ref) => (
  <PaginationLink ref={ref} disabled={disabled}>
    <Icon icon="chevronUp" rotation={90} />
  </PaginationLink>
));

PaginationNext.displayName = "Pagination.Next";
