import ButtonBG from 'components/utilsComponents/ButtonBG';
import React from 'react';

interface IDataSection {
  id: number;
  title: string;
  description: string;
  titleButton: string;
}

type Props = {
  dataSection: IDataSection;
};

const SectionView = ({ dataSection }: Props) => {
  return (
    <div className="w-3/4 mx-auto text-center">
      <h3 className="text-4xl my-4">{dataSection.title}</h3>
      <p>{dataSection.description}</p>
      <div className="flex justify-end mt-5">
        <ButtonBG name={dataSection.titleButton} />
      </div>
    </div>
  );
};

export default SectionView;
