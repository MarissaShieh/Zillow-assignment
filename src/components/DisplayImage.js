import React from 'react';

function DisplayImage(props) {
  return (
    <figure>
      <img src={props.image.url} alt={props.image.caption}/>
      <figcaption>{props.image.caption}</figcaption>
    </figure>
  )
};

export default DisplayImage;