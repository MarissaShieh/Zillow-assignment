import React from 'react';
import DisplayImage from './DisplayImage';
import SideArrow from './SideArrow';
import samplePhotos from '../data/samplePhotoData';
import {Swipeable} from 'react-swipeable'

class PhotoGallery extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: true,
      photos: [],
      currentPhotoIndex: null,
      photoArrayLength: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.generateArrowProps = this.generateArrowProps.bind(this);
  }

  componentDidMount() {
    // Get photos to display.
    // Can be refactored to display photos retrieved from database
    const photos = samplePhotos;
    this.setState({
      loading: false,
      photos,
      currentPhotoIndex: 0,
      indexOfLastPhoto: photos.length - 1
    });
  }

  handleClick(newPhotoIndex) {
    console.log('hi');
    this.setState({
      currentPhotoIndex: newPhotoIndex
    });
  }

  generateArrowProps(side) {
    return {
      side,
      currentIndex: this.state.currentPhotoIndex,
      indexOfLastPhoto: this.state.indexOfLastPhoto,
      updateDisplay: this.handleClick
    }
  }

  render(){
    const { loading, photos, currentPhotoIndex, indexOfLastPhoto} = this.state;

    const config = {
      onSwipedLeft: () => this.handleClick((currentPhotoIndex === indexOfLastPhoto)? 0: currentPhotoIndex + 1),
      onSwipedRight: () => this.handleClick((currentPhotoIndex === 0)? indexOfLastPhoto: currentPhotoIndex - 1),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    };

    return (
      <Swipeable {...config}>
        <div className="container">
          <SideArrow {...this.generateArrowProps("left")}/>
          {loading? 
            (<svg width="500" height="500" viewBox="0 0 100 100">  
              <rect width="100" height="100" rx="10" ry="10" fill="#CCC" />
            </svg>) : 
            <DisplayImage display={!loading} image={photos[currentPhotoIndex]} />}
          <SideArrow {...this.generateArrowProps("right")}/>
        </div>
      </Swipeable>
    )
  }
}

export default PhotoGallery;
