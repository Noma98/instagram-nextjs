import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};
function ColorBtn({ text, onClick }: Props) {
  return (
    <div className='rounded-md p-[0.15rem] bg-gradient-to-bl from-pink-500 via-rose-500 to-amber-500'>
      <button
        onClick={onClick}
        className='py-2 px-4 border border-1 rounded-md bg-white hover:opacity-95'
      >
        {text}
      </button>
    </div>
  );
}

export default ColorBtn;
