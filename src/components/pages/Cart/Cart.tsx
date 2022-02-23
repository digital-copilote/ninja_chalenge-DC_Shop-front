// import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import CartItem from 'components/Cart/CartItem';
import React, { useContext } from 'react';

import CartContext from '../../../contexts/CartContext';

const Cart = () => {
  const { itemCart } = useContext(CartContext);

  // Update summary of cart
  let itemsPrices = itemCart.map((item) => item.price);
  let sumCart = itemsPrices.reduce((prev, cur) => prev + cur, 0);

  // shipping price
  const shippingPrice = 5;

  // TVA calc
  let tvaPrice = 0.17 * sumCart;

  // total order
  let sumOrder = sumCart + shippingPrice;

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Panier
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Articles dans votre panier
            </h2>

            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {itemCart?.map((product, index) => (
                <CartItem
                  key={index}
                  name={product.draw?.name}
                  price={product.price}
                  imageSrc={product.draw?.urlDraw}
                  size={product.size?.name}
                  idShirt={product.idShirt}
                />
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50  px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Commande en cours
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Total Articles</dt>
                <dd className="text-sm font-medium text-gray-900">{sumCart}€</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Frais de livraison</span>
                  {/* <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">
                      En savoir plus sur les frais de livraison
                    </span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a> */}
                </dt>
                <dd className="text-sm font-medium text-gray-900">{shippingPrice}€</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm text-gray-600">
                  <span> dont TVA</span>
                  {/* <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">
                      En savoir plus sur le calcul de la TVA
                    </span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a> */}
                </dt>
                <dd className="text-sm font-medium text-gray-900">{tvaPrice}€</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">{sumOrder}€</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent  shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Commander
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Cart;
