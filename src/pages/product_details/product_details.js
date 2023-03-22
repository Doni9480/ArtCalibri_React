import React, { Component } from 'react'
import SliderProduktDetails from '../../components/slider/slider2'
import './style.css'

import s1 from './../../img/w1.jpg'
import s2 from './../../img/w2.jpg'
import s3 from './../../img/w3.jpg'
import s4 from './../../img/w4.jpg'

export default class ProductDetails extends Component {
   render() {
      return (
         <div className='product-details'>
            <div className='product-details__item-block'>
               <SliderProduktDetails />
            </div>
            <div className='product-details__item-block'>
               <div className='product-details__text-content'>
                  <div className='product-details__description'>
                     Композиция шаров на день
                     рождения для девочек
                  </div>
                  <div className='product-details__price-artikul'>
                     <div className='product-details__price'>
                        <div className='product-details__active-price'>
                           1450
                           <span>p</span>
                        </div>
                        <div className='product-old-price'>
                           1450
                           <span>p</span>
                        </div>
                        <div className='product-action'>
                           -7%
                        </div>
                     </div>
                     <div className='product-action__artikul'>
                        Артикул <span>847603</span>
                     </div>
                  </div>
                  <div className='product-action__options'>
                     <div className='subtitle-text'>
                        Чем надуть шары
                     </div>
                     <div className='product-action__radio-input'>
                        <form className='product-action__form'>
                           <input className='product-action__radio-btn' type='radio' name='gas' value='air' id='air' />
                           <label className='product-action__radio-label' htmlFor='air'>Воздух</label>
                           <input className='product-action__radio-btn' type='radio' name='gas' value='helium' id='helium' defaultChecked />
                           <label className='product-action__radio-label' htmlFor='helium'>Гелий</label>
                           <button className='product-action__btn-sopping'>В корзину</button>
                        </form>
                     </div>
                  </div>
                  <div className='product-details__compound'>
                     <div className='subtitle-text'>
                        Состав
                     </div>
                     <ul className='product-details__compound-list'>
                        <li className='product-details__compound-item'>
                           <div className='product-item-name'>Шар латоксный</div>
                           <div className='product-details__item-count'>9 <span>шт</span></div>
                        </li>
                        <li className='product-details__compound-item'>
                           <div className='product-item-name'>Шар 3D</div>
                           <div className='product-details__item-count'>1 <span>шт</span></div>
                        </li>
                        <li className='product-details__compound-item'>
                           <div className='product-item-name'>Наклейки</div>
                           <div className='product-details__item-count'>7 <span>шт</span></div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
