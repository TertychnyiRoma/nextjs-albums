import {
  forwardRef,
  type ComponentProps,
  type FC,
  ForwardRefRenderFunction,
} from 'react';
import cn from 'classnames';

export const InputWithForwardedRef: ForwardRefRenderFunction<
  HTMLInputElement,
  ComponentProps<'input'>
> = ({ className, ...props }, ref) => (
  <input
    type='text'
    className={cn(
      'rounded-[10px] border-[1px] border-[#EDEDED] bg-[#FCFCFC] px-8 py-4',
      'ring-slate-300 placeholder:text-sm placeholder:font-medium placeholder:text-[#9B9B9B]',
      'focus:outline-none focus:ring',
      className,
    )}
    {...props}
    ref={ref}
  />
);

export const Input = forwardRef(InputWithForwardedRef);
