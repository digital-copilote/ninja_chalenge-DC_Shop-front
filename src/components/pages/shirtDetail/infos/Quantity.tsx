import React, { useContext, useEffect, useState } from 'react';

import less from '../../../../../resources/moins.png';
import more from '../../../../../resources/plus.png';
import CartContext from '../../../../contexts/CartContext';

const Quantity = () => {
  const { newShirtPreCart, setNewShirtPreCart } = useContext(CartContext);

  const [countProduct, setCountProduct] = useState(1);

  const handleChangeQuantity = (action: string) => {
    countProduct >= 0 && action === 'more' && setCountProduct(countProduct + 1);
    countProduct > 1 && action === 'less' && setCountProduct(countProduct - 1);
  };

  useEffect(() => {
    const newShirt = { ...newShirtPreCart };
    newShirt.quantity = countProduct;
    setNewShirtPreCart(newShirt);
  }, [countProduct]);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between p-1 rounded-lg w-max bg-primary">
        <button
          onClick={() => handleChangeQuantity('less')}
          className="w-6 border-none cursor-pointer bg-none opacity-30 hover:opacity-100">
          <img src={less} className="w-4 h-4 m-auto" alt="less" />
        </button>
        <input
          type="number"
          min="10"
          max="100"
          readOnly
          value={countProduct}
          className="px-0 m-0 text-center border-none appearance-none w-max bg-primary"
        />
        <button
          onClick={() => handleChangeQuantity('more')}
          className="w-6 border-none cursor-pointer bg-none opacity-30 hover:opacity-100">
          <img className="w-4 h-4 m-auto" src={more} alt="more" />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
