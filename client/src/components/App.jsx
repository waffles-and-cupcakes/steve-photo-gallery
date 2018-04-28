import React from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';
import style from './App.css';

const toggleScrolling = () => {
  const body = document.getElementsByTagName('body')[0];
  body.classList.toggle(style.modalOpen);
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      photos: [
        {
          photoUrl: '',
        },
      ],
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleScrolling = this.toggleScrolling.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    axios.get(`/rooms/${id}/photos`)
      .then(res => {
        this.setState({
          photos: res.data,
        });
      });
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen }, toggleScrolling);
  }

  render() {
    const backgroundStyle = {
      backgroundImage: `url('${this.state.photos[0].photoUrl}')`,
    };
    return (
      <div>
        <div onClick={this.toggleModal} className={style.bannerImg} style={backgroundStyle}>
          <button className={style.viewPhotos}>View Photos</button>
        </div>
        <Modal
          photos={this.state.photos}
          open={this.state.isOpen}
          toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default App;
