import { Organizations, Users } from 'graphQl/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';

import AddProducts from './AddProducts';
import ArtistShirt from './ArtistShirt';
import OrganizationsShirt from './OrganizationsShirt';

type Props = {
  color: string;
  price: number;
  organization: Maybe<Organizations> | undefined;
  user: Maybe<Users> | undefined;
};

const Infos = ({ color, price, organization, user }: Props) => {
  return (
    <div className="w-1/2">
      <h2 className="mt-10 text-4xl text-center ml-44">{price}€</h2>
      <div className="flex justify-center w-full mt-10">
        <AddProducts color={color} />
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
