import type { ComponentProps, FC, PropsWithChildren } from 'react';
import cn from 'classnames';

type Props = ComponentProps<'label'> & PropsWithChildren;

export const Label: FC<Props> = ({ className, children, ...props }) => (
  <label
    {...props}
    className={cn('w-fit font-semibold text-[#444444]', className)}
  >
    {children}
  </label>
);
