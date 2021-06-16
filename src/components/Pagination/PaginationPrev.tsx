import { forwardRef } from "react";
import { Icon } from "../../components";
import { PaginationLink } from "./PaginationLink";

export type PaginationPrevProps = {
  href?: string;
  disabled?: boolean;
};

export const PaginationPrev = forwardRef<
  HTMLAnchorElement,
  PaginationPrevProps
>(({ href, disabled, ...rest }, ref) => (
  <PaginationLink href={href} ref={ref} disabled={disabled} {...rest}>
    <Icon icon="chevronUp" rotation={270} />
  </PaginationLink>
));

PaginationPrev.displayName = "Pagination.Prev";
