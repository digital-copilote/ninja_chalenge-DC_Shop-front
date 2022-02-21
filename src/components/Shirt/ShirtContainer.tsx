import { useQuery } from '@apollo/client';
import { Query } from 'graphQl/generated';
import { shirtsQuery } from 'graphQl/queries';
import React from 'react';

import ShirtView from './ShirtView';

const ShirtContainer = () => {
  const { loading, error, data } = useQuery<Query>(shirtsQuery);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="grid grid-cols-1 mt-6 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
      {data?.AllShirts?.map((shirt) => (
        <ShirtView key={shirt?.idShirt} shirt={shirt} />
      ))}
    </div>
  );
};

export default ShirtContainer;
