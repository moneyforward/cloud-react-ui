import { forwardRef } from 'react';
import { Icon } from '../../components';
import { PaginationLink, PaginationLinkProps } from './PaginationLink';

export type PaginationPrevProps = Pick<
  PaginationLinkProps,
  'href' | 'disabled' | 'onClick'
>;

export const PaginationPrev = forwardRef<
  HTMLAnchorElement,
  PaginationPrevProps
>(({ href, disabled, ...rest }, ref) => (
  <PaginationLink
    aria-label="前のページ"
    href={href}
    ref={ref}
    disabled={disabled}
    {...rest}
  >
    <Icon icon="chevronUp" rotation={270} />
  </PaginationLink>
));

PaginationPrev.displayName = 'Pagination.Prev';
