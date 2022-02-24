import { useQuery } from '@apollo/client';
import { Query } from 'graphQl/generated';
import { shirtQuery } from 'graphQl/queries';
import React from 'react';
import { useParams } from 'react-router-dom';

import ShirtDetailView from './ShirtDetailView';

const ShirtDetailContainer = () => {
  const { idShirt } = useParams();
  const { loading, error, data } = useQuery<Query>(shirtQuery, {
    variables: { idShirt },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="mt-4">
      <ShirtDetailView shirtDetails={data?.OneShirt} />
    </div>
  );
};

export default ShirtDetailContainer;
