import { cn } from '@/lib/utils';
import React from 'react';

const Section = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        'w-full max-w-[1210px] mx-auto grid grid-cols-4 gap-x-4 sm:grid-cols-12 sm:gap-x-[32px] ',
        className
      )}
      {...props}
    />
  );
});

Section.displayName = 'Section';

export { Section };
