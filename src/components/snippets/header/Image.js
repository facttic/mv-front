import React from 'react';

const Image = (props) => {

  return (
    <img className={props.className} src={'/' + props.imgSrc} height={props.imgHeight} width={props.imgWidth} alt={props.imgAlt} />
  );
}

export default Image;