import SectionContainer from 'components/section/SectionContainer';
import ShirtContainer from 'components/Shirt/ShirtContainer';
import React from 'react';

import { dataSection } from '../../../data/data';

const Collections = () => {
  return (
    <div>
      <ShirtContainer location="collections" />
      <SectionContainer dataSection={dataSection[3]} />
    </div>
  );
};

export default Collections;
