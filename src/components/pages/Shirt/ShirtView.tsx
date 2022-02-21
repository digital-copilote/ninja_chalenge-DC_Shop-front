import { Shirts } from 'graphQl/generated';
import React from 'react';

import shirtBase from '../../../../resources/shirt.png';

type Props = {
  shirt: Shirts | null;
};

const ShirtView = ({ shirt }: Props) => {
  return (
    <div key={shirt?.idShirt} className="relative group bg-slate-500">
      <div className="relative w-full overflow-hidden rounded-lg h-96 group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
        <img
          src={shirtBase}
          alt={shirt?.draw?.name || ''}
          className="object-cover object-center w-full h-full"
        />
        <img
          className="absolute w-1/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          src={shirt?.draw?.urlDraw || ''}
          alt={shirt?.draw?.name || ''}
        />
      </div>
      <div className="flex items-center justify-between w-full p-4">
        <h3 className="text-base font-semibold text-gray-900">
          <span className="absolute inset-0" />
          {shirt?.draw?.name}
        </h3>
        <p className="mt-1 text-sm">{shirt?.price}€</p>
      </div>
    </div>
  );
};

export default ShirtView;
