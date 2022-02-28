import React from 'react';

const ButtonBG = ({ name }: { name: string }) => {
  return (
    <button className='relative before:content=[""] before:absolute before:top-full before:right-0 before:-translate-x-1/4 before:w-full before:h-1/3 before:bg-primary hover:before:translate-x-1/4 before:transition before:duration-300 before:ease-in-out'>
      {name}
    </button>
  );
};

export default ButtonBG;
