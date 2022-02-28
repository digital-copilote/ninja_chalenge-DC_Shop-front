// import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import CartItem from 'components/Cart/CartItem';
import React, { useContext } from 'react';

import CartContext from '../../../contexts/CartContext';

const Cart = () => {
  const { shirtsOnCart } = useContext(CartContext);

  // Update summary of cart
  let itemsPrices = shirtsOnCart.map((item) => item.price * item.quantity);
  let sumCart = itemsPrices.reduce((prev, cur) => prev + cur, 0);

  // shipping price
  const shippingPrice = 5;

  // TVA calc
  let tvaPrice = 0.17 * sumCart;

  // total order
  let sumOrder = sumCart + shippingPrice;

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Panier
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Articles dans votre panier
            </h2>

            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {shirtsOnCart?.map((product, index) => (
                <CartItem
                  key={index}
                  index={index}
                  drawName={product.drawName}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  size={product.size}
                  quantity={product.quantity}
                />
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="px-4 py-6 mt-16 bg-gray-50 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Commande en cours
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Total Articles</dt>
                <dd className="text-sm font-medium text-gray-900">{sumCart}€</dd>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Frais de livraison</span>
                </dt>
                <dd className="text-sm font-medium text-gray-900">{shippingPrice}€</dd>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <dt className="flex text-sm text-gray-600">
                  <span> dont TVA</span>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  {(Math.round(tvaPrice * 100) / 100).toFixed(2)}€
                </dd>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">{sumOrder}€</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-3 text-base font-medium text-white bg-primary border border-transparent shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
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
