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
      currentPhotoIndex: null
    }
  }

  componentDidMount() {
    // Get photos to display.
    // Can be refactored to display photos retrieved from database
    const photos = samplePhotos;
    this.setState({
      loading: false,
      photos,
      currentPhotoIndex: 0,
    });
  }

  render(){
    return (
      <div className="container">
        <SideArrow side="left" index={this.state.currentPhotoIndex}/>
        {this.state.loading? <div>Loading...</div> : 
          <DisplayImage image={this.state.photos[this.state.currentPhotoIndex]}/>} 
        <SideArrow side="right" index={this.state.currentPhotoIndex}/>
      </div>
    )
  }
}

export default PhotoGallery;