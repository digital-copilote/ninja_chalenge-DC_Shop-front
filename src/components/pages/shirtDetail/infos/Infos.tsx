import { Organizations, Sizes, Users } from 'graphQl/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import React, { useContext, useEffect } from 'react';

import CartContext from '../../../../contexts/CartContext';
import AddProducts from './AddProducts';
import ArtistShirt from './ArtistShirt';
import OrganizationsShirt from './OrganizationsShirt';

type Props = {
  color: string;
  price: number;
  organization: Maybe<Organizations> | undefined;
  user: Maybe<Users> | undefined;
  sizes: Maybe<Maybe<Sizes>[]> | undefined;
  idSizeDefault: string | undefined;
};

const Infos = ({ color, price, organization, user, sizes, idSizeDefault }: Props) => {
  const { newShirtPreCart, setNewShirtPreCart } = useContext(CartContext);
  const image = newShirtPreCart.drawName;

  useEffect(() => {
    const newShirt = { ...newShirtPreCart };
    newShirt.price = price;
    setNewShirtPreCart(newShirt);
  }, [image]);

  return (
    <div className="w-1/2">
      <h2 className="mt-10 text-4xl text-center ml-44">{price}€</h2>
      <div className="flex justify-center w-full mt-10">
        <AddProducts color={color} sizes={sizes} idSizeDefault={idSizeDefault} />
      </div>
      <div>
        <OrganizationsShirt organization={organization} />
      </div>
      <div>
        <ArtistShirt artist={user} />
      </div>
    </div>
  );
};

export default Infos;
