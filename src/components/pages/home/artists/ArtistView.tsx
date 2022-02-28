import Button from 'components/utilsComponents/Button';
import TitleBG from 'components/utilsComponents/TitleBG';
import { Maybe, Users } from 'graphQl/generated';
import React from 'react';

import faceImage from '../../../../../resources/portrait.jpg';
import ShirtArtist from './ShirtArtist';

type Props = {
  artistRandom: Maybe<Users> | undefined;
};

const ArtistView = ({ artistRandom }: Props) => {
  return (
    <div>
      <div className="flex justify-end w-2/3 mx-auto py-10 text-4xl">
        <TitleBG
          name={artistRandom?.firstname + ' ' + artistRandom?.lastname}
          color="bg-primary"
        />
      </div>
      <div className="grid grid-cols-10 grid-rows-6 gap-3 p-10">
        <div className="col-start-4 col-span-4 row-start-1 row-span-3">
          <img src={faceImage} alt="artist" />
        </div>
        <div className=" col-start-2 col-span-4 row-start-2 row-span-3 ">
          {artistRandom?.draws && <ShirtArtist draw={artistRandom?.draws[0]} />}
        </div>
        <div className="col-start-7 col-span-3 mt-20 row-start-4 row-span-3">
          {artistRandom?.draws && (
            <ShirtArtist
              draw={artistRandom?.draws[artistRandom?.draws.length > 1 ? 1 : 0]}
            />
          )}
        </div>
        <div className="row-start-6 col-start-3 col-span-2">
          <Button name="Voir toutes ses réalisations" />
        </div>
        <div className="col-start-5 col-span-6 row-start-3 row-span-3 z-10 relative">
          <div className="bg-primary p-4">
            <h3 className="text-3xl text-center mb-4 text-white">A propos de lui</h3>
            <p className="text-white">{artistRandom?.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistView;
