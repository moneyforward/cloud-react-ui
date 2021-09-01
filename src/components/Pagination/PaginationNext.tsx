import { forwardRef } from 'react';
import { Icon } from '../../components';
import { PaginationLink, PaginationLinkProps } from './PaginationLink';

export type PaginationNextProps = Pick<
  PaginationLinkProps,
  'href' | 'disabled' | 'onClick'
>;

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

PaginationNext.displayName = 'Pagination.Next';
