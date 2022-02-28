import { css, StyleSheet } from 'aphrodite';
import React from 'react';

type Props = {
  image: {
    img: string;
    text: string;
    title: string;
  };
};

const ContainerCarousel = ({ image }: Props) => {
  const color = 'bg-primary';
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
        backgroundColor: color,
        transition: '0.3s ease-in-out',
      },
      ':hover::before': {
        width: '100%',
      },
    },
  });

  return (
    <div className="h-full">
      <div className="h-full flex items-center">
        <div className="w-2/3 h-full flex justify-center">
          <img className="h-full object-cover" alt="" src={image.img} />
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center mr-16">
          <h2 className={`before:bg-primary text-xl ${css(styles.collectionLink)}`}>
            {image.title}
          </h2>
          <p className="my-12">{image.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContainerCarousel;
