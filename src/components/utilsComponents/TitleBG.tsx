import { css, StyleSheet } from 'aphrodite';
import React from 'react';

type Props = {
  color: string;
  name: string;
  location?: string;
};

const TitleBG = ({ color, name, location }: Props) => {
  const styles = StyleSheet.create({
    collectionTitle: {
      position: 'relative',
      zIndex: 10,
      marginBottom: '1em',
      marginRight: location === 'shirtDetails' ? '-9%' : '',
      fontSize: location === 'shirtDetails' ? '2.5vw' : '',
      width: 'max-content',
      padding: '0 10px',
      '::before': {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: -10,
        height: '40%',
        width: '100%',
        backgroundColor: location === 'shirtDetails' ? 'before:bg-primary' : color,
      },
    },
  });
  return (
    <div
      className={`flex ${
        location === 'shirtDetails' ? 'justify-end' : 'justify-center'
      } `}>
      <h2 className={`before:bg-primary text-2xl ${css(styles.collectionTitle)}`}>
        {name}
      </h2>
    </div>
  );
};

export default TitleBG;
