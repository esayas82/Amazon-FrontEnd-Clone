import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './Img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './CarouselEffect.module.css';


function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <div key={index} className={classes.hero__img}>
            <img src={imageItemLink} alt={`img-${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
