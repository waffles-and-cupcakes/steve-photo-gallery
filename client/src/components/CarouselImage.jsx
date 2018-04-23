import React from 'react';
import Slider from 'react-slick';
import './CarouselImage.css';

const CarouselImage = (props) => (
  <Slider
    accessability={true}
    swipe={false}
    fade={true}
    arrows={true}
    asNavFor={props.thumbnail}
    afterChange={(current) => props.setCurrentImageIndex(current)}
    ref={props.setMain} >
    {props.photos.map((photo, index) => {
      return (
        <div>
          <img className="main-image" onClick={() => props.sliderMain.slickNext()} src={`${photo.photoUrl}`} />
        </div>
      );
    })}
  </Slider>
);

export default CarouselImage;