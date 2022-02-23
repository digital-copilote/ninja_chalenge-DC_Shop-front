import { XIcon } from '@heroicons/react/solid';
import React from 'react';

interface IShirt {
  name: string;
  price: number;
  imageSrc: string;
  size: string;
  idShirt: number;
}

const CartItem = ({ name, price, imageSrc, size, idShirt }: IShirt) => {
  return (
    <li className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={name}
          className="w-24 h-24  object-center object-cover sm:w-48 sm:h-48"
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <p className="font-medium text-gray-700 hover:text-gray-800">{name}</p>
              </h3>
            </div>
            <div className="mt-1 flex text-sm">
              {/* <p className="text-gray-500">{color}</p> */}
              {size ? (
                <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">{size}</p>
              ) : null}
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">{price}</p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor={`quantity-${idShirt}`} className="sr-only">
              Quantité, {name}
            </label>
            <select
              id={`quantity-${idShirt}`}
              name={`quantity-${name}`}
              className="max-w-full  border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>

            <div className="absolute top-0 right-0">
              <button
                type="button"
                className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Retirer</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
