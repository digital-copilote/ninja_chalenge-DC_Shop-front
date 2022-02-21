import React, { useContext } from 'react';

import CartContext from '../../../contexts/CartContext';

// Tableau de test, à supprimer quand on pourra ajouter des items au panier
const cart: any = [
  {
    price: '20€',
  },
  {
    price: '15€',
  },
  {
    price: '30€',
  },
];
//////////////////

const Cart = () => {
  const { itemCart, setItemCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {itemCart?.map((item, index) => (
        <div key={index}>
          {/* <p>{item.draw?.name}</p>
          <p>{item.size?.name}</p> */}
          <p>{item.price}</p>
        </div>
      ))}
      <button onClick={() => setItemCart([])}>Vider le panier</button>
      <button onClick={() => setItemCart(cart)}>Remplir le panier</button>
    </div>
  );
};

export default Cart;
