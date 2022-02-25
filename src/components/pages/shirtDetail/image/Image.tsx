import TitleBG from 'components/utilsComponents/TitleBG';
import { Maybe } from 'graphQl/generated';
import { formatText } from 'lib/utils';
import React from 'react';

import gots from '../../../../../resources/fairware.png';
import fairware from '../../../../../resources/gots.svg';
import shirtBase from '../../../../../resources/shirt.png';
// import CartContext from '../../../../contexts/CartContext';

type Props = {
  urlDraw: Maybe<string> | undefined;
  color: Maybe<string> | undefined;
  name: Maybe<string> | undefined;
};

const Image = ({ urlDraw, color, name }: Props) => {
  // const { newShirtPreCart, setNewShirtPreCart } = useContext(CartContext);

  // useEffect(() => {
  //   const newShirt = { ...newShirtPreCart };
  //   newShirt.imageUrl = urlDraw;
  //   console.log(newShirt);
  //   setNewShirtPreCart(newShirt);
  // }, [urlDraw]);

  return (
    <div className="relative w-1/2 ">
      <div style={{ backgroundColor: color || '' }}>
        <div className="pt-4">
          <TitleBG
            color={color || ''}
            name={formatText(name) || ''}
            location="shirtDetails"
          />
        </div>

        <div className="relative">
          <img
            className="object-cover object-center w-full h-full"
            src={shirtBase}
            alt={name || 'NC'}
          />
          <img
            className="absolute w-1/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={urlDraw || ''}
            alt={name || ''}
          />
        </div>
        <div className="flex justify-between ml-4">
          <div className="flex">
            <img className="w-14 h-14" src={gots} alt="gots" />
            <img className="w-14 h-14" src={fairware} alt="fairware" />
          </div>
          <div>
            <img className="bg-white w-14 h-14" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
