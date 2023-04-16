import React, { useEffect, useState } from 'react'

import Slider from "react-slick";

import './style2.css'

export default function SliderProduktDetails({ photos, domain }) {
   const [images, setImages] = useState([])
   let slider_ref;

   useEffect(() => {
      setImages(photos)
   }, [photos])

   const slider_settings = {
      dots: false,
      arrows: false,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <div className='content-body-slider'>
         <ul className='slider-dots'>
            {
               images && images.map(data =>
                     <li className='slider-dots__item' key={data.id}>
                        <button className='slider-dots__btn' onClick={() => slider_ref.slickGoTo(images.indexOf(data))}>
                           <img className='slider-dots__btn-img' src={`${domain}${data.photo}`} alt='' />
                        </button>
                     </li>
               )}
         </ul>
         <Slider className="slider" {...slider_settings} ref={slider => (slider_ref = slider)}>
            {
               images && images.map(data =>
                  <div className="slider__item" key={data.id}>
                     <div className="slider__photo">
                        <img src={`${domain}${data.photo}`} alt="lider" className="slider__img" />
                     </div>
                  </div>
               )
            }
         </Slider>
      </div>
   )
}
