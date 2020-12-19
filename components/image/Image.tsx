import React from 'react';
import NextImage from 'next/image';

const Image: React.FC = () => {
  return <NextImage src="/me.png" alt="Picture of the author" width={500} height={500} />;
};

export default Image;
