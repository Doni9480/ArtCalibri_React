import React from 'react'

import Slider from "react-slick";

import './style.css'

import { Link } from 'react-router-dom';


export default function SliderWorks(props) {
   const settings = {
      lazyLoad: 'ondemand',
      dots: false,
      arrows:false,
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
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            }
         }]
   };
   return (
      <Slider className="block-works__list-content-block row-flex slider" {...settings}>
         {
            props.list_images && props.list_images.map((img_data) =>
               <div className="block-works__item block-item" key={img_data.id}>
                  <div className="block-works__photo">
                     <Link to={`/kategories/${img_data.cat_slug}/${img_data.product}`} className="block-works__item-img-link">
                        <img src={`${img_data.photo}`} alt={img_data.product__slug} className="block-works__img" />
                     </Link>
                  </div>
               </div>
            )
         }
      </Slider>
   )
}
