import React from 'react'

import Slider from "react-slick";

import './style.css'

import s1 from './../../img/w1.jpg'
import s2 from './../../img/w2.jpg'
import s3 from './../../img/w3.jpg'
import s4 from './../../img/w4.jpg'
import { Link } from 'react-router-dom';


export default function SliderWorks(props) {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }]
   };
   return (
      // <div className="block-works__list-content-block row-flex slider">
      <Slider className="block-works__list-content-block row-flex slider" {...settings}>
         {
            props.list_images && props.list_images.map((img_data) =>
               <div className="block-works__item block-item" key={img_data.id}>
                  <div className="block-works__photo">
                     <Link href="###" className="block-works__item-img-link">
                        <img src={`${props.domain}${img_data.photo}`} alt="lider" className="block-works__img" />
                     </Link>
                  </div>
               </div>
            )
         }
         {/* <div className="block-works__item block-item">
            <div className="block-works__photo">
               <a href="###" className="block-works__item-img-link">
                  <img src={s2} alt="lider" className="block-works__img" />
               </a>
            </div>
         </div>
         <div className="block-works__item block-item">
            <div className="block-works__photo">
               <a href="###" className="block-works__item-img-link">
                  <img src={s3} alt="lider" className="block-works__img" />
               </a>
            </div>
         </div>
         <div className="block-works__item block-item">
            <div className="block-works__photo">
               <a href="###" className="block-works__item-img-link">
                  <img src={s4} alt="lider" className="block-works__img" />
               </a>
            </div>
         </div> */}
      </Slider>
      // </div>
   )
}
