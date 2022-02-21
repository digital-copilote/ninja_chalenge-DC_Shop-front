import React from 'react';
import { useParams } from 'react-router-dom';

const OneCollection = () => {
  const idTheme = useParams();
  console.log(idTheme);

  return (
    <div>
      <h1>One Collection</h1>
    </div>
  );
};

export default OneCollection;
