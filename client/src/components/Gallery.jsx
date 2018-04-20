import React from 'react';
import axios from 'axios';
import './Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [
        {
          photoUrl: ''
        }
      ]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3002/rooms/1/photos')
      .then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state.photos);
    let style = {
      'background-image': `url('${this.state.photos[0].photoUrl}')`
    };
    return (
      <div className="banner-img" style={style}>
      </div>
    );
  }
}

export default Gallery;