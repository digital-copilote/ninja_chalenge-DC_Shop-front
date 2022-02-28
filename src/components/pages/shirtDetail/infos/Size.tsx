import { Sizes } from 'graphQl/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import React, { SetStateAction, useContext } from 'react';

import CartContext from '../../../../contexts/CartContext';

type Props = {
  size: Maybe<Sizes> | undefined;
  color: string;
  sizeSelected: string | undefined;
  setSizeSelected: React.Dispatch<SetStateAction<string | undefined>>;
};

const Size = ({ size, color, sizeSelected, setSizeSelected }: Props) => {
  const { newShirtPreCart, setNewShirtPreCart } = useContext(CartContext);

  const handleChangeSize = () => {
    const newShirt = { ...newShirtPreCart };
    newShirt.size = size?.name;
    setNewShirtPreCart(newShirt);
    setSizeSelected(size?.idSize);
  };

  return (
    <button
      onClick={() => handleChangeSize()}
      style={{ backgroundColor: color }}
      className={`flex items-center justify-around w-10 h-10 cursor-pointer hover:border-2 hover:border-primary ${
        sizeSelected === size?.idSize ? 'border-2 border-primary' : ''
      }`}>
      {size?.name}
    </button>
  );
};

export default Size;

// const Size = ({ size, color, sizeSelected, setSizeSelected }: Props) => {
//   return (
//     <button
//       onClick={() => setSizeSelected(size?.idSize)}
//       style={{ backgroundColor: color }}
//       className={`flex items-center justify-around w-10 h-10 cursor-pointer hover:border-2 hover:border-primary ${
//         sizeSelected === size?.idSize ? 'border-2 border-primary' : ''
//       }`}>
//       {size?.name}

//     </button>
//   );
// };

// export default Size;
