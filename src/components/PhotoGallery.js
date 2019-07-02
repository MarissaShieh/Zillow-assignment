import React from 'react';
import DisplayImage from './DisplayImage';
import SideArrow from './SideArrow';
import samplePhotos from '../data/samplePhotoData';
import { Swipeable } from 'react-swipeable'

class PhotoGallery extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: true,
      photos: [],
      currentPhotoIndex: null,
      photoArrayLength: null
    }
    this.handleAction = this.handleAction.bind(this);
    this.generateArrowProps = this.generateArrowProps.bind(this);
    this.swipeableConfigurations = this.swipeableConfigurations.bind(this);
  }

  componentDidMount() {
    // Get photos to display.
    // Can be refactored to display photos retrieved from database
    const photos = samplePhotos;
    this.setState({
      loading: false,
      photos,
      currentPhotoIndex: 0
    });
  }

  handleAction(direction) {
    const { currentPhotoIndex, photos} = this.state
    const indexOfLastPhoto = photos.length - 1;
    let newPhotoIndex = 0;
    if (direction === "left") {
      newPhotoIndex = (currentPhotoIndex === indexOfLastPhoto)? 
        0: currentPhotoIndex + 1
    } else {
      newPhotoIndex = (currentPhotoIndex === 0)? 
        indexOfLastPhoto: currentPhotoIndex - 1
    }
    this.setState({
      currentPhotoIndex: newPhotoIndex
    });
  }

  swipeableConfigurations() {
    return {
      onSwipedLeft: () => this.handleAction("left"),
      onSwipedRight: () => this.handleAction("right"),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    };
  }

  render(){
    const { loading, photos, currentPhotoIndex } = this.state;
    const { swipeableConfigurations, handleAction } = this;

    return (
      <Swipeable {...swipeableConfigurations()} >
        <div className="container" >
          <SideArrow side={"left"} updateDisplay={handleAction} />
          {loading? 
            (<svg width="500" height="500" viewBox="0 0 100 100">  
              <rect width="100" height="100" rx="10" ry="10" fill="#CCC" />
            </svg>) : 
            <DisplayImage display={!loading} image={photos[currentPhotoIndex]} />}
          <SideArrow side={"right"} updateDisplay={handleAction} />
        </div>
      </Swipeable>
    )
  }
}

export default PhotoGallery;
