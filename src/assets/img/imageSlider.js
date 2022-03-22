import React, { useState } from 'react';
import { SliderData } from './sliderData';


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <section className='slider'>
            <div className="leftBtn" onClick={prevSlide}></div>
            <div className="rightBtn" onClick={nextSlide}></div>
            {SliderData.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === current && (<img
                            src={slide.image}
                            alt="travel image"
                            className="block h-full mx-auto"
                        />)}

                    </div>
                )


            })}
        </section>
    )
};

export default ImageSlider;