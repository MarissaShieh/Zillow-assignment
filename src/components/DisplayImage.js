import React from 'react';
import { CSSTransition } from 'react-transition-group';

function DisplayImage(props) {
  const { display, image } = props;
  return (
    <>
      <CSSTransition
        in={display}
        appear={true}
        timeout={4000}
        classNames="carousel"
        onEnter={() => { console.log('Invoked!') }}
        unmountOnExit
        >
        <figure>
          <img src={image.url} alt={image.caption}/>
          <figcaption>{image.caption}</figcaption>      
        </figure>
       </CSSTransition>
    </>
  )

};

export default DisplayImage;