import { useQuery } from '@apollo/client';
import { Query } from 'graphQl/generated';
import { artistsQuery } from 'graphQl/queries';
import React from 'react';

import ArtistView from './ArtistView';

const ArtistContainer = () => {
  const { loading, error, data } = useQuery<Query>(artistsQuery, {
    variables: { role: 'artist' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ArtistView
        artistRandom={
          data?.AllArtists &&
          data?.AllArtists[Math.floor(Math.random() * data?.AllArtists?.length)]
        }
      />
    </div>
  );
};

export default ArtistContainer;
