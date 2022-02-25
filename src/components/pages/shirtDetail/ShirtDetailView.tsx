import { Maybe, Shirts } from 'graphQl/generated';
import React, { useContext, useEffect } from 'react';

import CartContext from '../../../contexts/CartContext';
import Image from './image/Image';
import Infos from './infos/Infos';

type Props = {
  shirtDetails: Maybe<Shirts> | undefined;
};

const ShirtDetailView = ({ shirtDetails }: Props) => {
  const { newShirtPreCart, setNewShirtPreCart } = useContext(CartContext);

  useEffect(() => {
    const newShirt = { ...newShirtPreCart };
    newShirt.drawName = shirtDetails?.draw?.name;
    newShirt.imageUrl = shirtDetails?.draw?.urlDraw;
    setNewShirtPreCart(newShirt);
  }, [shirtDetails]);

  return (
    <div className="flex items-center">
      <Image
        urlDraw={shirtDetails?.draw?.urlDraw}
        color={shirtDetails?.draw?.theme?.color}
        name={shirtDetails?.draw?.name}
      />
      <Infos
        color={shirtDetails?.draw?.theme?.color || ''}
        price={shirtDetails?.price || 0}
        organization={shirtDetails?.draw?.organization}
        user={shirtDetails?.draw?.user}
      />
    </div>
  );
};

export default ShirtDetailView;
