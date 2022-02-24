import { ArrowRightIcon } from '@heroicons/react/solid';
import { css, StyleSheet } from 'aphrodite';
import TitleBG from 'components/utilsComponents/TitleBG';
import { Shirts } from 'graphQl/generated';
import React from 'react';
import { Link } from 'react-router-dom';

import gots from '../../../resources/gots.svg';
import shirtBase from '../../../resources/shirt.png';

type Props = {
  shirt: Shirts | null;
  location: string;
};

const ShirtView = ({ shirt, location }: Props) => {
  const color = shirt?.draw?.theme?.color;
  const styles = StyleSheet.create({
    collectionLink: {
      position: 'relative',
      zIndex: 10,
      '::before': {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        height: '50%',
        zIndex: -10,
        width: '0%',
        transform: 'translateX(-50%)',
        backgroundColor: color || '',
        transition: '0.3s ease-in-out',
      },
      ':hover::before': {
        width: '100%',
      },
    },
  });
  return (
    <div key={shirt?.idShirt} className="relative">
      <TitleBG name={shirt?.draw?.theme?.name || ''} color={color || ''} />
      <div
        style={{ backgroundColor: color || '' }}
        className="w-full cursor-pointer hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
        <Link to={`/collections/${shirt?.draw?.theme?.name}/shirt/${shirt?.idShirt}`}>
          <h3 className="font-semibold text-center text-gray-900">
            <span className="absolute" />
            {shirt?.draw?.name}
          </h3>
          <div className="relative">
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
            <div>
              <img className="w-12 h-12" src={gots} alt="label_gots" />
            </div>
            <div>
              <p className="mt-1 text-2xl text-black">{shirt?.price}€</p>
              <p className="text-xs text-right">TTC</p>
            </div>
          </div>
        </Link>
      </div>
      {location == 'home' && (
        <div className="p-4">
          <Link
            className="flex items-center justify-end"
            to={`/collections/${shirt?.draw?.idTheme}`}>
            <p className={`before:bg-primary ${css(styles.collectionLink)}`}>
              Voir la collection
            </p>
            <ArrowRightIcon className="w-10 h-5" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShirtView;
