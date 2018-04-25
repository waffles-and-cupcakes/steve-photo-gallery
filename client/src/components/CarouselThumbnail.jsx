import React from 'react';
import Slider from 'react-slick';
import style from './CarouselThumbnail.css';

const CarouselThumbnail = (props) => (
  <Slider
    accessability={true}
    swipe={false}
    arrows={false}
    focusOnSelect={true}
    centerMode={true}
    slidesToShow={9}
    asNavFor={props.main}
    ref={props.setThumbnail}
    responsive={[
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 7
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]} >
    {props.photos.map((photo, index) => {
      return (
        <div key={photo.thumbnailUrl + index} >
          <div className={style.thumbContainer} >
            <img className={style.thumbnailImage} src={`${photo.thumbnailUrl}`} />
          </div>
        </div>
      );
    })}
  </Slider>
);


export default CarouselThumbnail;