import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Check, MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ArrowLine } from '@/assets/icons';

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        'flex flex-col items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 md:flex-row md:flex-wrap',
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
  )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
    order?: number;
    isFilled: boolean;
  }
>(({ asChild, className, order, isFilled, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <div className="flex justify-center items-center gap-2">
      <p
        className={cn(
          'px-2 py-1 rounded-2xl',
          isFilled ? 'bg-secondary-40 text-primary-0' : 'bg-primary-20 text-primary-45'
        )}
      >
        {isFilled ? <Check className="size-4" /> : order?.toString().padStart(2, '0')}
      </p>
      <Comp ref={ref} className={cn('transition-colors font-medium hover:text-foreground', className)} {...props} />
    </div>
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'> & { order?: number; isFilled: boolean; isCurrent: boolean }
>(({ className, order, isFilled, isCurrent, ...props }, ref) => (
  <div className="flex justify-center items-center gap-2">
    <p
      className={cn(
        'px-2 py-1 rounded-2xl',
        isFilled || isCurrent ? 'bg-secondary-40 text-primary-0' : 'bg-primary-20 text-primary-45'
      )}
    >
      {/* {order?.toString().padStart(2, '0')} */}
      {isFilled ? <Check className="size-4" /> : order?.toString().padStart(2, '0')}
    </p>
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        'font-medium text-body-sm',
        isFilled || isCurrent ? 'text-primary-80' : 'text-primary-40',
        className
      )}
      {...props}
    />
  </div>
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<'li'>) => (
  <li role="presentation" aria-hidden="true" className={className} {...props}>
    {children}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
};
