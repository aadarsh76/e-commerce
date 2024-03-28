import React from 'react'
import Carousel from '../../HomeCarousel/Carousel';
import OtherCarousel from '../../OtherSectionCarousel/OtherCarousel';
import { mens_kurta } from '../../OtherSectionCarousel/Data/mens_kurta';

const HomePage = () => {
  return (
    <div>
        <Carousel/>

        <div className='space-y-10 py-20 flex flex-col jusitfy-center px-5 lg:px-10'>
            <OtherCarousel data={mens_kurta} sectionName={"Men's Kurtas"} />
            <OtherCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
            <OtherCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
            <OtherCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
            <OtherCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage;