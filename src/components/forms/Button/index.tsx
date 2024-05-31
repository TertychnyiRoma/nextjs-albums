import type { ComponentProps, FC, PropsWithChildren } from 'react';

type Props = ComponentProps<'button'> & PropsWithChildren;

export const Button: FC<Props> = ({ className, children, ...props }) => (
  <button
    className={`w-[152px] whitespace-nowrap rounded-[80px] bg-[#1D47EB]
        px-[30px] py-[14px] text-white transition-opacity hover:opacity-80 ${className}`}
    {...props}
  >
    {children}
  </button>
);
