import ShirtContainer from 'components/Shirt/ShirtContainer';
import React from 'react';

import Carousel from './Carousel';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Carousel />
      <ShirtContainer location="home" />
    </div>
  );
};

export default Home;
