import SectionContainer from 'components/section/SectionContainer';
import ShirtContainer from 'components/Shirt/ShirtContainer';
import React from 'react';

import { dataSection } from '../../../data/data';
import ArtistContainer from './artists/ArtistContainer';

const Home = () => {
  return (
    <div>
      <SectionContainer dataSection={dataSection[0]} />
      <ShirtContainer location="home" />
      <SectionContainer dataSection={dataSection[1]} />
      <ArtistContainer />
      <SectionContainer dataSection={dataSection[2]} />
    </div>
  );
};

export default Home;
