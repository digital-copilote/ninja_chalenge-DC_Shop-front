// import { useQuery } from '@apollo/client';
// import { Shirts } from 'graphQl/generated';
// import { Query } from 'graphQl/generated';
// import { shirtsQuery } from 'graphQl/queries';
import React, { createContext, useState } from 'react';

export interface IshirtOnCart {
  drawName: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
  index?: number;
}

const SHIRT_ON_CART = [
  {
    drawName: 'planete',
    size: 'M',
    price: 15,
    quantity: 1,
    imageUrl: 'url',
  },
  {
    drawName: 'enfant',
    size: 'S',
    price: 25,
    quantity: 2,
    imageUrl: 'url',
  },
];

interface AppContextInterface {
  shirtsOnCart: IshirtOnCart[];
  setShirtsOnCart: React.Dispatch<React.SetStateAction<IshirtOnCart[]>>;
  modifyProductInCart: Function;
  //   addProductInCart: Function;
}

const CartContext = createContext<AppContextInterface>({
  shirtsOnCart: [],
  setShirtsOnCart: () => {},
  modifyProductInCart: () => {},
  //   addProductInCart: () => {},
});

export default CartContext;

type Props = { children: React.ReactNode };
export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [shirtsOnCart, setShirtsOnCart] = useState<IshirtOnCart[]>(SHIRT_ON_CART);

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

  //   const addProductInCart = (index) => {
  //     // If a product isn't in the cart, add it
  //     const position = productsOnCart.findIndex(
  //       (product) => product.id_product === idProduct,
  //     );

  //     if (position === -1) {
  //       const positionInProducts = products.find(
  //         (product) => product.id_product === idProduct,
  //       );
  //       const updatedProductsOnCart = [...productsOnCart];
  //       updatedProductsOnCart.push({ quantity: 1, ...positionInProducts });
  //       console.log(updatedProductsOnCart);
  //       setProductsOnCart(updatedProductsOnCart);
  //     }
  //     // Else, just add 1 to quantity
  //     else {
  //       const position = productsOnCart.findIndex(
  //         (product) => product.id_product === idProduct,
  //       );
  //       const updatedProductsOnCart = [...productsOnCart];
  //       updatedProductsOnCart[position].quantity++;
  //       setProductsOnCart(updatedProductsOnCart);
  //     }
  //   };

  return (
    <CartContext.Provider
      value={{
        shirtsOnCart,
        setShirtsOnCart,
        modifyProductInCart,
        // addProductInCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
