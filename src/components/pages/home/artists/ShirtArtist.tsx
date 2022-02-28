import { Draws, Maybe } from 'graphQl/generated';
import React from 'react';

import shirtBase from '../../../../../resources/shirt.png';

const ShirtArtist = ({ draw }: { draw: Maybe<Maybe<Draws>> | undefined }) => {
  return (
    <div className="relative">
      <div
        style={{ backgroundColor: draw?.theme?.color || '' }}
        className="w-full cursor-pointer">
        <h3 className="font-semibold text-center text-gray-900">
          <span className="absolute" />
          {draw?.name}
        </h3>
        <div className="relative">
          <img
            src={shirtBase}
            alt={draw?.name || ''}
            className="object-cover object-center w-full h-full"
          />
          <img
            className="absolute w-1/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={draw?.urlDraw || ''}
            alt={draw?.name || ''}
          />
        </div>
      </div>
    </div>
  );
};

export default ShirtArtist;
