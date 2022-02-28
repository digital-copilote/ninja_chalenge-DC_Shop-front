import React, { useContext } from 'react';

import CartContext from '../../contexts/CartContext';

type Props = {
  name: string;
};

const Button = ({ name }: Props) => {
  const { addProductInCart, newShirtPreCart } = useContext(CartContext);

  const handleClick = () => {
    if (name === 'Ajouter aux panier') {
      addProductInCart(newShirtPreCart);
    }
  };

  return (
    <button
      onClick={() => handleClick()}
      className="p-2 rounded-lg bg-primary hover:opacity-50">
      {name}
    </button>
  );
};

export default Button;
