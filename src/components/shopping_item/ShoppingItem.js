import React, { useEffect, useState } from 'react'
import './style.css'

export default function ShoppingItem(props) {
   const [count, setCount] = useState(1);
   const [productsSum, setProductsSum] = useState(props.data.active_price);

   const photo = Object.values(props.data.img_url)[0]

   const incrimment = () => {
      if (count >= 1) {
         setCount(count + 1);
      }
   }

   const decrimment = () => {
      if (count !== 1) {
         setCount(count - 1);
      }
   }

   useEffect(() => {
      setProductsSum(props.data.active_price * count);
   }, [count])

   return (
      <div className='shopping-content__product-item'>
         <div className='shopping-content__card-num'>{props.data.id}</div>
         <div className='shopping-content__block-product-img'>
            <div className='shopping-content__product-img'>
               <img className='shopping-content__img' src={photo} alt='card' />
            </div>
            <div className='shopping-content__product-status'>
               <div className='shopping-content__product-action'>
                  {props.data.action}
                  <span>%</span>
               </div>
            </div>
         </div>
         <div className='shopping-content__product-info-block'>
            <div className='shopping-content__price-info'>
               <div className='shopping-content__price-active'>{props.data.active_price}<span>p</span></div>
               <div className='shopping-content__price-old'>{props.data.old_price}<span>p</span></div>
            </div>
            <div className='shopping-content__description'>
               {props.data.description}
            </div>
            <div className='shopping-content__product-code'>
               Код товара <span>{props.data.product_number}</span>
            </div>
         </div>
         <div className='shopping-content__get-count-block'>
            <button className='shopping-content__btn-minus' onClick={() => props.handlerClick('-', props.data.id)} style={count > 1 ? { opacity: '1' } : { opacity: '0.4' }}></button>
            <span className='shopping-content__count-value'>{props.data.count}</span>
            <button className='shopping-content__btn-plus' onClick={() => props.handlerClick('+', props.data.id)}></button>
         </div>
         <div className='shopping-content__products-sum'>
            {props.count}<span>p</span>
         </div>
         <div className='shopping-content__delete-block'>
            <button className='shopping-content__delete-btn' onClick={() => props.onDelete(props.data.id)}></button>
         </div>
      </div>
   )
}
