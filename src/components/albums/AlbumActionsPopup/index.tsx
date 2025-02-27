'use client';

import { gilroy } from '@/app/fonts';
import {
  autoUpdate,
  useFloating,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
} from '@floating-ui/react';
import type { FC } from 'react';
import cn from 'classnames';
import { More } from '../../icons/More';
import { AlbumPopupActions } from './AlbumPopupActions';
import { useAlbumsStore } from '@/providers/albums-store-provider';

type Props = {
  albumId: number;
  triggerClassName?: string;
};

export const AlbumActionsPopup: FC<Props> = ({ albumId, triggerClassName }) => {
  const { albumIdWithOpenPopup, setAlbumIdWithOpenPopup } = useAlbumsStore(
    (state) => state,
  );

  const isOpen = albumIdWithOpenPopup === albumId;

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      if (open) {
        setAlbumIdWithOpenPopup(albumId);
      } else {
        setAlbumIdWithOpenPopup(null);
      }
    },
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <button
        ref={refs.setReference}
        className={cn(
          'absolute right-[3px] top-[8px] cursor-pointer',
          triggerClassName,
        )}
        {...getReferenceProps()}
      >
        <More />
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className={`z-[1] rounded-[11px] border-[1px] border-slate-300
            bg-white py-[13px] backdrop-blur-xl ${gilroy.className}`}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <AlbumPopupActions albumId={albumId} />
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};
