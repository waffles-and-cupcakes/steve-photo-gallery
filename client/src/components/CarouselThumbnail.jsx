import React from 'react';
import Slider from 'react-slick';
import './CarouselThumbnail.css';

const CarouselThumbnail = (props) => (
  <Slider
    accessability={true}
    swipe={false}
    arrows={false}
    focusOnSelect={true}
    centerMode={true}
    slidesToShow={9}
    asNavFor={props.main}
    ref={props.setThumbnail} >
    {props.photos.map((photo, index) => {
      return (
        <div>
          <img className="thumbnail-image" src={`${photo.thumbnailUrl}`} />
        </div>
      );
    })}
  </Slider>
);

export default CarouselThumbnail;