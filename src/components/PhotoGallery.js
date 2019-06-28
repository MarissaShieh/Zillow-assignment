import React from 'react';
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
    console.log(photos[0].url.masterBedroom);
    this.setState({
      loading: false,
      photos,
      currentPhotoIndex: Math.floor(photos.length/2), // default first photo is middle photo
    });
  }

  render(){
    return (
      <div>
        {this.state.loading? <div>Loading...</div> : <img src={this.state.photos[0].url} alt={this.state.photos[0]}/>} 
      </div>
    )
  }
}

export default PhotoGallery;