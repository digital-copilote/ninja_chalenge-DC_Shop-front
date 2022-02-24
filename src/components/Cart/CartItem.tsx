import { XIcon } from '@heroicons/react/solid';
import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../../contexts/CartContext';

interface IshirtOnCart {
  drawName: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
  index: number;
}

const CartItem = ({ drawName, price, imageUrl, size, quantity, index }: IshirtOnCart) => {
  const { modifyProductInCart } = useContext(CartContext);

  const [updateQuantity, setUpdateQuantity] = useState<number>(quantity);
  // const [updateprice, setUpdatePrice] = useState<number>(price);

  const quantityDisplay: Array<number> = [];

  for (let i = 1; i <= 8; i++) {
    quantityDisplay.push(i);
  }

  useEffect(() => {
    modifyProductInCart(index, updateQuantity);
  }, [updateQuantity]);

  return (
    <li className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={drawName}
          className="object-cover object-center w-24 h-24 sm:w-48 sm:h-48"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <p className="font-medium text-gray-700 hover:text-gray-800">
                  {drawName}
                </p>
              </h3>
            </div>
            <div className="flex mt-1 text-sm">
              {size ? (
                <p className="pl-4 ml-4 text-gray-500 border-l border-gray-200">{size}</p>
              ) : null}
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">
              Prix unitaire : {price}€
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor={`quantity-${drawName}`} className="sr-only">
              Quantité : {updateQuantity}, {drawName}
            </label>
            <select
              defaultValue={quantity}
              onChange={(e) => setUpdateQuantity(parseInt(e.target.value))}
              // id={`quantity-${idShirt}`}
              name={`quantity-${drawName}`}
              className="max-w-full  border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              {quantityDisplay.length &&
                quantityDisplay.map((itemQuantity, index) => (
                  <option key={index} value={itemQuantity}>
                    {itemQuantity}
                  </option>
                ))}
            </select>

            <div className="absolute top-0 right-0">
              <button
                onClick={() => setUpdateQuantity(0)}
                type="button"
                className="inline-flex p-2 -m-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Retirer</span>
                <XIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
