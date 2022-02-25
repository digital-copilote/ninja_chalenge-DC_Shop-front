import React, { useContext } from 'react';

import CartContext from '../../../../contexts/CartContext';

type Props = {
  size: string;
  color: string;
};
const Size = ({ size, color }: Props) => {
  const { newShirtPreCart, setNewShirtPreCart } = useContext(CartContext);

  const handleChangeSize = () => {
    const newShirt = { ...newShirtPreCart };
    newShirt.size = size;
    setNewShirtPreCart(newShirt);
  };

  return (
    <button
      onClick={() => handleChangeSize()}
      style={{ backgroundColor: color }}
      className="flex items-center justify-around w-10 h-10 cursor-pointer hover:border-2 hover:border-primary">
      {size}
    </button>
  );
};

export default Size;
