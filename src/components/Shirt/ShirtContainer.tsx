import { useQuery } from '@apollo/client';
import { Query } from 'graphQl/generated';
import { shirtsQuery } from 'graphQl/queries';
import React from 'react';

import ShirtView from './ShirtView';

type Props = {
  location: string;
  idTheme?: string;
};

const ShirtContainer = ({ location, idTheme }: Props) => {
  const { loading, error, data } = useQuery<Query>(shirtsQuery, {
    variables: idTheme && location === 'collection' ? { idTheme } : undefined,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div
      className={`grid grid-cols-1 m-6 gap-y-10 sm:gap-y-0 sm:gap-x-6  ${
        location === 'home'
          ? 'sm:grid-cols-2 w-3/4 mx-auto lg:gap-x-20'
          : 'sm:grid-cols-3 lg:gap-x-8'
      }`}>
      {(location !== 'collections' ? data?.AllShirts?.slice(0, 2) : data?.AllShirts)?.map(
        (shirt) => (
          <ShirtView location={location} key={shirt?.idShirt} shirt={shirt} />
        ),
      )}
    </div>
  );
};

export default ShirtContainer;
