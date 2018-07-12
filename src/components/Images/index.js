import React from 'react';

import Image from './Image';

const Images = props => {
  console.log(props);

  return (
    <div>{props.data.map(image => <Image key={image} url={image} />)}</div>
  );
};

export default Images;
