import React from 'react';
import Slide from './Slide';

function SlidesContainer(props) {

    const renderSlides = () => {
        const slidesArr = [];
        props.slides.map((slide, index) => {
            slidesArr.push(
                <Slide content={slide} key={index}/>
            )
        })
        return slidesArr;
    }

    return(
        <div>
            {renderSlides()}
        </div>
    )
}

export default SlidesContainer;