import React, { useState } from 'react'

import Slider from "react-slick";

import './style2.css'

import s1 from './../../img/w1.jpg'
import s2 from './../../img/w2.jpg'
import s3 from './../../img/w3.jpg'
import s4 from './../../img/w4.jpg'


export default function SliderProduktDetails() {
   // const [sliderIndex, setSliderIndex] = useState(0);
   // const [sliderBig, setSliderBig] = useState(null);
   let slider_ref;

   const slider_settings = {
      dots: false,
      arrows: false,
      fade: true,
      infinite: true,
      speed: 5000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true,
   };

   return (
      <div className='content-body-slider'>
         <ul className='slider-dots'>
            <li className='slider-dots__item'>
               <button className='slider-dots__btn' onClick={() => slider_ref.slickGoTo(0)}>
                  <img className='slider-dots__btn-img' src={s1} alt='' />
               </button>
            </li>
            <li className='slider-dots__item'>
               <button className='slider-dots__btn' onClick={() => slider_ref.slickGoTo(1)}>
                  <img className='slider-dots__btn-img' src={s2} alt='' />
               </button>
            </li>
            <li className='slider-dots__item'>
               <button className='slider-dots__btn' onClick={() => slider_ref.slickGoTo(2)}>
                  <img className='slider-dots__btn-img' src={s3} alt='' />
               </button>
            </li>
            <li className='slider-dots__item'>
               <button className='slider-dots__btn' onClick={() => slider_ref.slickGoTo(3)}>
                  <img className='slider-dots__btn-img' src={s4} alt='' />
               </button>
            </li>
         </ul>
         <Slider className="slider" {...slider_settings} ref={slider => (slider_ref = slider)}>
            <div className="slider__item">
               <div className="slider__photo">
                  <img src={s1} alt="lider" className="slider__img" />
               </div>
            </div>
            <div className="slider__item">
               <div className="slider__photo">
                  <img src={s2} alt="lider" className="slider__img" />
               </div>
            </div>
            <div className="slider__item">
               <div className="slider__photo">
                  <img src={s3} alt="lider" className="slider__img" />
               </div>
            </div>
            <div className="slider__item">
               <div className="slider__photo">
                  <img src={s4} alt="lider" className="slider__img" />
               </div>
            </div>
         </Slider>
      </div>
   )
}
