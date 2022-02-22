import React from 'react';

type Props = {
  name: string;
};

const Button = ({ name }: Props) => {
  return <button className="p-2 rounded-lg bg-primary hover:opacity-50">{name}</button>;
};

export default Button;
