import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from './Modal';
import './Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      photos: [
        {
          photoUrl: ''
        }
      ]
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleScrolling = this.toggleScrolling.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3002/rooms/7/photos')
      .then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  toggleModal(e) {
    this.setState({ isOpen: !this.state.isOpen }, this.toggleScrolling);
  }

  toggleScrolling() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('modal-open');
  }

  render() {
    let style = {
      backgroundImage: `url('${this.state.photos[0].photoUrl}')`
    };
    return (
      <div>
        <div onClick={this.toggleModal} className="banner-img" style={style}>
          <button className="view-photos">View Photos</button>
        </div>
        <Modal
          photos={this.state.photos}
          open={this.state.isOpen}
          toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default Gallery;