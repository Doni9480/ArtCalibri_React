import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TitleBlock from '../../components/block_titlle/title_block';
import './style.css'

import s1 from './../../img/w1.jpg'
import s2 from './../../img/w2.jpg'
import s3 from './../../img/w3.jpg'
import s4 from './../../img/w4.jpg'


export default class Gallery extends Component {
   render() {
      return (
         <>
            <TitleBlock text={'Галерея'} />
            <div className='gallery-img-list'>
               <div className='gallery-img-list__item'>
                  <NavLink to='###' className='gallery-img-list__link'>
                     <img className='gallery-img-list__img' src={s1} alt='' />
                  </NavLink>
               </div>
               <div className='gallery-img-list__item'>
                  <NavLink to='###' className='gallery-img-list__link'>
                     <img className='gallery-img-list__img' src={s2} alt='' />
                  </NavLink>
               </div>
               <div className='gallery-img-list__item'>
                  <NavLink to='###' className='gallery-img-list__link'>
                     <img className='gallery-img-list__img' src={s3} alt='' />
                  </NavLink>
               </div>
               <div className='gallery-img-list__item'>
                  <NavLink to='###' className='gallery-img-list__link'>
                     <img className='gallery-img-list__img' src={s4} alt='' />
                  </NavLink>
               </div>
            </div>
         </>
      )
   }
}
