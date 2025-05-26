import React from 'react'
import CarouselEffect from '../../Carousel/CarouselEffect';
import Catagory from '../../Catagory/Catagory';
import Product from '../../Product/Product';
import LayOut from '../../LayOut/LayOut';

function Landing() {
  return (
      <LayOut>
          <CarouselEffect />
      <Catagory />
      <Product/>
      
    </LayOut>
  )
}

export default Landing
