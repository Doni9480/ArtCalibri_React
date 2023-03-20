import React from 'react'

import './style.css'

export default function Produkt(props) {
   return (
      <div className="block-leaders-of-sells__item block-item">
         <div className="block-leaders-of-sells__photo">
            <img src={props.data.img} alt="lider" className="block-leaders-of-sells__img" />
            <div className='block-leaders-of-sells__btn-to-shopping'>
               <span>Добавить в корзину</span>
            </div>
         </div>
         <div className="block-leaders-of-sells__block-price container-price">
            <div className="block-leaders-of-sells__active-price active-price">{props.data.active_price}</div>
            <div className="block-leaders-of-sells__old-price old-price">{props.data.old_price}</div>
            <div className="block-leaders-of-sells__action action-num">{props.data.action}</div>
         </div>
         <div className="block-leaders-of-sells__description description-text">
            <p>{props.data.description}</p>
         </div>
      </div>
   )
}
