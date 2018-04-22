import React from 'react';
import CarouselImage from './CarouselImage';
import CarouselThumbnail from './CarouselThumbnail';
import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: null,
      thumbnail: null,
    };

    this.setMain = this.setMain.bind(this);
    this.setThumbnail = this.setThumbnail.bind(this);
  }

  componentDidMount() {
    this.setState({
      main: this.sliderMain,
      thumbnail: this.sliderThumbnail,
    });
  }

  setMain(slider) {
    this.sliderMain = slider;
  }

  setThumbnail(slider) {
    this.sliderThumbnail = slider;
  }

  render() {
    return (
      <div className="container">
        <CarouselImage setMain={this.setMain} sliderMain={this.sliderMain} photos={this.props.photos} thumbnail={this.state.thumbnail} />
        <CarouselThumbnail setThumbnail={this.setThumbnail} sliderThumbnail={this.sliderThumbnail} photos={this.props.photos} main={this.state.main} />
      </div>
    );
  }
}

export default Carousel;