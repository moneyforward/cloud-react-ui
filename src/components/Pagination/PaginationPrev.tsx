import { forwardRef } from "react";
import { Icon } from "../../components";
import { PaginationLink, PaginationLinkProps } from "./PaginationLink";

export const PaginationPrev = forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ disabled }, ref) => (
  <PaginationLink ref={ref} disabled={disabled}>
    <Icon icon="chevronUp" rotation={270} />
  </PaginationLink>
));

PaginationPrev.displayName = "Pagination.Prev";
