import { useQuery } from '@apollo/client';
import { Maybe, Query, Shirts } from 'graphQl/generated';
import { sizesQuery } from 'graphQl/queries';
import React from 'react';

import Image from './image/Image';
import Infos from './infos/Infos';

type Props = {
  shirtDetails: Maybe<Shirts> | undefined;
};

const ShirtDetailView = ({ shirtDetails }: Props) => {
  const idDraw = shirtDetails?.idDraw;

  const { loading, error, data } = useQuery<Query>(sizesQuery, {
    variables: { idDraw },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

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
        sizes={data?.AllSizes}
        idSizeDefault={shirtDetails?.idSize}
      />
    </div>
  );
};

export default ShirtDetailView;
