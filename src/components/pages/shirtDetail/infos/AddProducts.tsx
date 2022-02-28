import Button from 'components/utilsComponents/Button';
import { Sizes } from 'graphQl/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import React, { useState } from 'react';

import Quantity from './Quantity';
import Size from './Size';

type Props = {
  color: string;
  sizes: Maybe<Maybe<Sizes>[]>;
  idSizeDefault: string | undefined;
};

const AddProducts = ({ color, sizes, idSizeDefault }: Props) => {
  const [sizeSelected, setSizeSelected] = useState(idSizeDefault);
  return (
    <div className="w-3/4">
      <div className="flex justify-around">
        {sizes &&
          sizes.map((size) => (
            <Size
              key={size?.idSize}
              size={size}
              color={color}
              sizeSelected={sizeSelected}
              setSizeSelected={setSizeSelected}
            />
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
