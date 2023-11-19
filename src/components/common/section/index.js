import { cn } from '@/lib/utils';
import React from 'react';

const Section = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn('w-full max-w-[1210px] mx-auto', className)}
      {...props}
    />
  );
});

Section.displayName = 'Section';

export { Section };
