import React from 'react';

type Props = {
  image: {
    img: string;
    text: string;
    title: string;
  };
};

const ContainerCarousel = ({ image }: Props) => {
  return (
    <div>
      <div>
        <p>{image.title}</p>
      </div>

      <div className=" flex">
        <div>
          <img className="w-full" alt="" src={image.img} />
        </div>
        <p>{image.text}</p>
      </div>
    </div>
  );
};

export default ContainerCarousel;
