import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function DisplayImage(props) {
  const { display, image } = props;
  return (
    <TransitionGroup>
      <CSSTransition
        in={display}
        appear={true}
        timeout={200}
        key={image.url}
        classNames="carousel"
        unmountOnExit
        >
        <figure>
          <img src={image.url} alt={image.caption}/>
          <figcaption>{image.caption}</figcaption>      
        </figure>
       </CSSTransition>
    </TransitionGroup>
  )

};

export default DisplayImage;