import cn from 'classnames';

const ACTIONS = ['Change Cover', 'Rename Album', 'Delete'];

export const AlbumPopupActions = () => {
  return (
    <ul className='flex flex-col'>
      {ACTIONS.map((action, i) => (
        <li key={action}>
          <button
            className={cn(
              'w-full px-[19px] py-[13px] text-start text-sm font-medium hover:bg-slate-100',
              {
                'text-[#FF0000]': i === ACTIONS.length - 1,
              },
            )}
          >
            {action}
          </button>
        </li>
      ))}
    </ul>
  );
};
