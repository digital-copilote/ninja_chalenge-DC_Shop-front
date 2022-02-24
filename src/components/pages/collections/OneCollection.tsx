import ShirtContainer from 'components/Shirt/ShirtContainer';
import React from 'react';
import { useParams } from 'react-router-dom';

const OneCollection = () => {
  const { idTheme } = useParams();

  return (
    <div>
      <h1>One Collection</h1>
      <ShirtContainer location="collection" idTheme={idTheme} />
    </div>
  );
};

export default OneCollection;
