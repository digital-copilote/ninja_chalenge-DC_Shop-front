import React, { createContext, useState } from 'react';

export interface IshirtOnCart {
  drawName: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
  index?: number;
}

const SHIRT_ON_CART = {
  drawName: '',
  size: 'S',
  price: 0,
  quantity: 1,
  imageUrl: '',
};

interface AppContextInterface {
  shirtsOnCart: IshirtOnCart[];
  setShirtsOnCart: React.Dispatch<React.SetStateAction<IshirtOnCart[]>>;
  modifyProductInCart: Function;
  addProductInCart: Function;
  newShirtPreCart: IshirtOnCart;
  setNewShirtPreCart: React.Dispatch<React.SetStateAction<IshirtOnCart>>;
}

const CartContext = createContext<AppContextInterface>({
  shirtsOnCart: [],
  setShirtsOnCart: () => {},
  modifyProductInCart: () => {},
  addProductInCart: () => {},
  newShirtPreCart: SHIRT_ON_CART,
  setNewShirtPreCart: () => {},
});

export default CartContext;

type Props = { children: React.ReactNode };
export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [shirtsOnCart, setShirtsOnCart] = useState<IshirtOnCart[]>([]);
  const [newShirtPreCart, setNewShirtPreCart] = useState<IshirtOnCart>(SHIRT_ON_CART);

  const modifyProductInCart = (index: number, quantity: number) => {
    // if quantity is 0, the product must be deleted from cart
    if (quantity === 0) {
      setShirtsOnCart(
        shirtsOnCart.filter((product) => shirtsOnCart.indexOf(product) !== index),
      );
    }
    // else just remove 1 from quantity
    else {
      const updatedProductsOnCart = [...shirtsOnCart];
      updatedProductsOnCart[index].quantity = quantity;
      setShirtsOnCart(updatedProductsOnCart);
    }
  };

  const addProductInCart = (shirt: IshirtOnCart) => {
    // If a product isn't in the cart, add it
    const position = shirtsOnCart.findIndex(
      (product) => product.drawName === shirt.drawName && product.size === shirt.size,
    );
    if (position === -1) {
      const newShirtsOnCart = [...shirtsOnCart];
      newShirtsOnCart.push(shirt);
      setShirtsOnCart(newShirtsOnCart);
    }
    // Else, just add 1 to quantity
    else {
      const updatedProductsOnCart = [...shirtsOnCart];
      updatedProductsOnCart[position].quantity++;
      setShirtsOnCart(updatedProductsOnCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        shirtsOnCart,
        setShirtsOnCart,
        modifyProductInCart,
        addProductInCart,
        newShirtPreCart,
        setNewShirtPreCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
