import React, { Component } from 'react'
import './style.css'

export default class SortForm extends Component {
   render() {
      return (
         <div className='sort-form'>
            <form className='sort-form__body'>
               <div className='sort-form__price'>
                  <span>Цена:</span>
                  <input className='sort-form__price-input' type='text' placeholder='От' />
                  <input className='sort-form__price-input' type='text' placeholder='До' />
               </div>
               <div className='sort-form__action'>
                  <input className='sort-form__action-checkbox' type='checkbox' id='action-checkbox' />
                  <label className='sort-form__action-label' htmlFor='action-checkbox'>Товары со скидкой</label>
               </div>
               <div className='sort-form__sort-by'>
                  <span>Сортировать:</span>
                  <div className='sort-form__select'>
                     <select>
                        <option value='null'>По умолчанию</option>
                        <option value='by name'>По имени</option>
                        <option value="by price min">По убыванию цены</option>
                        <option value="by price max">По возрастанию цены</option>
                        <option value="by action">По акции</option>
                     </select>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}
