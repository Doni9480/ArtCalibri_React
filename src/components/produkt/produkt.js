import React from 'react'
import { Link } from 'react-router-dom'
import DiscountCalculation from '../../utils/DiscountCalculation'
import WorkWithLocalStorage from '../../utils/WorkWithLocalStorage'

import './style.css'

export default function Produkt(props) {
   const [activePrice, oldPrice, discount] = DiscountCalculation(props.product.prices.price_active, props.product.prices.price_old)

   const add_to_sopping = (product_id) => {
      WorkWithLocalStorage.saveNewOrder(product_id)
   }

   return (
      <div className="block-leaders-of-sells__item block-item">
         <div className="block-leaders-of-sells__photo">
            <Link to={`/kategories/${props.product.cat_id}/${props.product.slug}`}>
               <img src={`${props.domain}${props.product.photo.photo}`} alt="lider" className="block-leaders-of-sells__img" />
            </Link>
            <div className='block-leaders-of-sells__btn-to-shopping' onClick={() => add_to_sopping(props.product.id)}>
               <span>Добавить в корзину</span>
            </div>
         </div>
         <div className="block-leaders-of-sells__block-price container-price">
            <div className="block-leaders-of-sells__active-price active-price">{activePrice}<span className='p'>p</span></div>
            {oldPrice && <div className="block-leaders-of-sells__old-price old-price">{oldPrice}<span>p</span></div>}
            {discount && <div className="block-leaders-of-sells__action action-num">{discount} <span>%</span></div>}
         </div>
         <div className="block-leaders-of-sells__description description-text">
            <Link to={`/kategories/${props.product.cat_id}/${props.product.slug}/`}><p>{props.product.description}</p></Link>
         </div>
      </div>
   )
}
