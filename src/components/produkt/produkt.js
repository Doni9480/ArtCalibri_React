import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function Produkt(props) {
   // console.log(props.product_price, Date(props.product_price.date_added));
   let active_price = Math.round(props.product_price[0].price);
   let old_price = props.product_price[1] ? Math.round(props.product_price[1].price) - active_price  > 0 ? Math.round(props.product_price[1].price) : null : null;
   let action = old_price ? Math.round(((old_price - active_price) / active_price) * 100) : null;
   
   return (
      <div className="block-leaders-of-sells__item block-item">
         <div className="block-leaders-of-sells__photo">
            <Link to={props.product.slug}><img src={`${props.domain}${props.product_img[0].photo}`} alt="lider" className="block-leaders-of-sells__img" /></Link>
            <div className='block-leaders-of-sells__btn-to-shopping'>
               <span>Добавить в корзину</span>
            </div>
         </div>
         <div className="block-leaders-of-sells__block-price container-price">
            <div className="block-leaders-of-sells__active-price active-price">{active_price}<span className='p'>p</span></div>
            <div className="block-leaders-of-sells__old-price old-price">{old_price && <>{old_price}<span>p</span></>}</div>
            <div className="block-leaders-of-sells__action action-num">{action && <>{action} <span>%</span></>}</div>
         </div>
         <div className="block-leaders-of-sells__description description-text">
            <Link to={`${props.product.slug}/`}><p>{props.product.description}</p></Link>
         </div>
      </div>
   )
}
