import { Shirts } from 'graphQl/generated';
import React, { createContext, useState } from 'react';

interface AppContextInterface {
  itemCart: Shirts[];
  setItemCart: React.Dispatch<React.SetStateAction<Shirts[]>>;
}

const CartContext = createContext<AppContextInterface>({
  itemCart: [],
  setItemCart: () => {},
});

export default CartContext;

type Props = { children: React.ReactNode };
export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [itemCart, setItemCart] = useState<Shirts[]>([]);

  console.log(itemCart);

  return (
    <CartContext.Provider
      value={{
        itemCart,
        setItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
