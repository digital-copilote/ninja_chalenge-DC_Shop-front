import React from 'react';

import SectionView from './SectionView';

interface IDataSection {
  id: number;
  title: string;
  description: string;
  titleButton: string;
}

type Props = {
  dataSection: IDataSection;
};

const SectionContainer = ({ dataSection }: Props) => {
  return (
    <div className="bg-gray-100 py-10">
      <SectionView dataSection={dataSection} />
    </div>
  );
};

export default SectionContainer;
