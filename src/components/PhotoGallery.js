import React from 'react';
import DisplayImage from './DisplayImage';
import SideArrow from './SideArrow';
import samplePhotos from '../data/samplePhotoData';

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
    return (
      <div className="container">
        <SideArrow {...this.generateArrowProps("left")}/>
        {this.state.loading? <div>Loading...</div> : 
          <DisplayImage image={this.state.photos[this.state.currentPhotoIndex]} />} 
        <SideArrow {...this.generateArrowProps("right")}/>
      </div>
    )
  }
}

export default PhotoGallery;