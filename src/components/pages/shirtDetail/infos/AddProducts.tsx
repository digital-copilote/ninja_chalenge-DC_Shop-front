import Button from 'components/utilsComponents/Button';
import React from 'react';

import Quantity from './Quantity';
import Size from './Size';

type Props = {
  color: string;
};

const AddProducts = ({ color }: Props) => {
  const sizes = ['S', 'M', 'L'];
  return (
    <div className="w-3/4">
      <div className="flex justify-around">
        {sizes.map((size) => (
          <Size key={size} size={size} color={color} />
        ))}
      </div>
      <div className="flex justify-around mt-8">
        <Quantity />
        <Button name="Ajouter aux panier" />
      </div>
    </div>
  );
};

export default AddProducts;
