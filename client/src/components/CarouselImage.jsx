import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import style from './CarouselImage.css';

const CarouselImage = (props) => (
  <Slider
    accessability={true}
    swipe={false}
    fade={true}
    lazyLoad={'progressive'}
    asNavFor={props.thumbnail}
    afterChange={(current) => props.setCurrentImageIndex(current)}
    ref={props.setMain} >
    {props.photos.map((photo, index) => (
      <div key={photo.photoUrl + index}>
        <img className={style.mainImage} onClick={() => props.sliderMain.slickNext()} src={`${photo.photoUrl}`} />
      </div>
    ))}
  </Slider>
);

CarouselImage.propTypes = {
  photos: PropTypes.array,
  setMain: PropTypes.func,
  setCurrentImageIndex: PropTypes.func,
  thumbnail: PropTypes.object,
};

export default CarouselImage;
