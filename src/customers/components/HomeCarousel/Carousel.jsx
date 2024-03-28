import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { carouselData } from './CarouselData';

const Carousel = () => {
    const items = carouselData.map((item) => (
        <img className='cursor-pointer' role='presentation' src={item.image} alt="" />
    ));
    
    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            stagePadding={{
                paddingLeft: 50, // Adjust as needed
                paddingRight: 50, // Adjust as needed
            }}
        />
    );
};

export default Carousel;
