import { Maybe, Users } from 'graphQl/generated';
import React from 'react';

type Props = {
  artist: Maybe<Users> | undefined;
};

const ArtistSHirt = ({ artist }: Props) => {
  return (
    <div className="px-10">
      <h2 className="mb-5">{`Le mot de l'artiste:`}</h2>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente quod
        cupiditate expedita, fugit a cum vel nobis, ut nulla molestias saepe corporis
        error odit, architecto officia. Aspernatur, libero obcaecati.
      </p>
      <p className="text-3xl text-right text-primary">
        {artist?.firstname + ' ' + artist?.lastname}
      </p>
    </div>
  );
};

export default ArtistSHirt;
