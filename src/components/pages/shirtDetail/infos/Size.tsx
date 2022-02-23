import React from 'react';

type Props = {
  size: string;
  color: string;
};
const Size = ({ size, color }: Props) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex items-center justify-around w-10 h-10 cursor-pointer hover:border-2 hover:border-primary">
      {size}
    </div>
  );
};

export default Size;
