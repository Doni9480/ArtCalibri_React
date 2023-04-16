import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export default function ShoppingItem(props) {
   const photo = `${props.domain}${props.data.photo.photo}`

   let active_price = Math.round(props.data.prices.price_active);
   let old_price = props.data.prices.price_old ? Math.round(props.data.prices.price_old) - active_price > 0 ? Math.round(props.data.prices.price_old) : null : null;
   let action = old_price ? Math.round(((active_price - old_price) / active_price) * 100) : null;


   return (
      <div className='shopping-content__product-item'>
         <div className='shopping-content__card-num'>{props.num}</div>
         <div className='shopping-content__block-product-img'>
            <div className='shopping-content__product-img'>
               <Link to={`/kategories/${props.data.cat_id}/${props.data.slug}`}>
                  <img className='shopping-content__img' src={photo} alt='card' />
               </Link>
            </div>
            <div className='shopping-content__product-status'>
               {
                  action &&
                  <div className='shopping-content__product-action'>
                     {action}
                     <span>%</span>
                  </div>
               }
            </div>
         </div>
         <div className='shopping-content__product-info-block'>
            <div className='shopping-content__price-info'>
               <div className='shopping-content__price-active'>{active_price}<span>p</span></div>
               <div className='shopping-content__price-old'>{old_price ? <>{old_price}<span>p</span></> : null}</div>
            </div>
            <div className='shopping-content__description'>
               <Link to={`/kategories/${props.data.cat_id}/${props.data.slug}`}>{props.data.description}</Link>
            </div>
            <div className='shopping-content__product-code'>
               Код товара <span>{props.data.product_number}</span>
            </div>
         </div>
         <div className='shopping-content__get-count-block'>
            <button className='shopping-content__btn-minus' onClick={() => props.handlerClick('-', props.data.slug)} style={props.count > 1 ? { opacity: '1' } : { opacity: '0.4' }}></button>
            <span className='shopping-content__count-value'>{props.count}</span>
            <button className='shopping-content__btn-plus' onClick={() => props.handlerClick('+', props.data.slug)}></button>
         </div>
         <div className='shopping-content__products-sum'>
            {props.products_sum}<span>p</span>
         </div>
         <div className='shopping-content__delete-block'>
            <button className='shopping-content__delete-btn' onClick={() => props.onDelete(props.data.id)}></button>
         </div>
      </div>
   )
}
