import { Sizes } from 'graphQl/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import React, { SetStateAction } from 'react';

type Props = {
  size: Maybe<Sizes> | undefined;
  color: string;
  sizeSelected: string | undefined;
  setSizeSelected: React.Dispatch<SetStateAction<string | undefined>>;
};
const Size = ({ size, color, sizeSelected, setSizeSelected }: Props) => {
  return (
    <button
      onClick={() => setSizeSelected(size?.idSize)}
      style={{ backgroundColor: color }}
      className={`flex items-center justify-around w-10 h-10 cursor-pointer hover:border-2 hover:border-primary ${
        sizeSelected === size?.idSize ? 'border-2 border-primary' : ''
      }`}>
      {size?.name}
    </button>
  );
};

export default Size;
