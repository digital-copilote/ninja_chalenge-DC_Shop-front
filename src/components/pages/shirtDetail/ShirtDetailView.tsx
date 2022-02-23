import { Maybe, Shirts } from 'graphQl/generated';
import React from 'react';

import Image from './image/Image';
import Infos from './infos/Infos';

type Props = {
  shirtDetails: Maybe<Shirts> | undefined;
};

const ShirtDetailView = ({ shirtDetails }: Props) => {
  console.log(shirtDetails);

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
