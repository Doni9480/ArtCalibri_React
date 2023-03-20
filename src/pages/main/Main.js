import React, { Component } from 'react'

import "./style.css"

import sh from './../../img/sh.png'

import lid from './../../img/lid.jpg'

import banner from './../../img/banner-bg.png'

import Slider from '../../components/slider/slider'
import KatalogList from '../../components/katalog_list/katalog_list'
import TitleBlock from '../../components/block_titlle/title_block'
import Produkts from '../../components/produkts/produkts'


export default class Main extends Component {
   render() {
      return (
         <>
            <div className="block-head">
               <div className="block-head__container conteiner">
                  <div className="block-head__content-block">
                     <div className="block-head__main-title">
                        <span>Распродажа</span> <br />в честь Нового года!
                     </div>
                     <div className="block-head__btn-block">
                        <div className="block-head__btn-item">
                           <a className="block-head__btn-link wait-bg" href="###">Все акции</a>
                        </div>
                        <div className="block-head__btn-item">
                           <a className="block-head__btn-link" href="###">Подробнее</a>
                        </div>
                     </div>
                  </div>
                  <div className="block-head__bg">
                     <img src={sh} alt="sh" />
                  </div>
               </div>
            </div>
            <div className="block-trend-kategori">
               <div className="block-trend-kategori__container conteiner">
                  <div className="block-trend-kategori__content-block">
                     <TitleBlock text={'Популярные категории'} link={"kategories/"} />
                     <KatalogList />
                  </div>
               </div>
            </div>
            <div className="block-leaders-of-sells">
               <div className="block-leaders-of-sells__container conteiner">
                  <div className="block-leaders-of-sells__content-block">
                     <TitleBlock text={'Лидеры продаж'} link={"###"} />
                     <Produkts count={4} />
                     <div className="block-leaders-of-sells__banner">
                        <div className="block-leaders-of-sells__block-container">
                           <div className="block-leaders-of-sells__content">
                              <div className="block-leaders-of-sells__text-banner">
                                 <span>Скидка 5%</span><br />
                                 на первый заказ
                              </div>
                              <form action="#" method="post" className="block-leaders-of-sells__form-banner">
                                 <div className="block-leaders-of-sells__inpit-block">
                                    <input type="tel" placeholder="+7" className="block-leaders-of-sells__input" />
                                    <button type="submit" className="block-leaders-of-sells__btn">Получить скидку</button>
                                 </div>
                              </form>
                           </div>
                           <div className="block-leaders-of-sells__bg">
                              <div className="block-leaders-of-sells__bg-img">
                                 <img src={banner} alt="bg" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="block-action">
               <div className="block-action__container conteiner">
                  <div className="block-action__content-block">
                     <TitleBlock text={'Акции'} link={"###"} />
                     <div className="block-action__list-content-block row-flex">
                        <div className="block-leaders-of-sells__item block-item">
                           <div className="block-leaders-of-sells__photo"><img src={lid} alt="lider" className="block-leaders-of-sells__img" /></div>
                           <div className="block-leaders-of-sells__block-price container-price">
                              <div className="block-leaders-of-sells__active-price active-price">1450р</div>
                              <div className="block-leaders-of-sells__old-price old-price">1540р</div>
                              <div className="block-leaders-of-sells__action action-num">-7%</div>
                           </div>
                           <div className="block-leaders-of-sells__description description-text">
                              <p>Композиция шаров на день рождения</p>
                           </div>
                        </div>
                        <div className="block-leaders-of-sells__item block-item">
                           <div className="block-leaders-of-sells__photo"><img src={lid} alt="lider" className="block-leaders-of-sells__img" /></div>
                           <div className="block-leaders-of-sells__block-price container-price">
                              <div className="block-leaders-of-sells__active-price active-price">1450р</div>
                              <div className="block-leaders-of-sells__old-price old-price">1540р</div>
                              <div className="block-leaders-of-sells__action action-num">-7%</div>
                           </div>
                           <div className="block-leaders-of-sells__description description-text">
                              <p>Композиция шаров на день рождения</p>
                           </div>
                        </div>
                        <div className="block-leaders-of-sells__item block-item">
                           <div className="block-leaders-of-sells__photo"><img src={lid} alt="lider" className="block-leaders-of-sells__img" /></div>
                           <div className="block-leaders-of-sells__block-price container-price">
                              <div className="block-leaders-of-sells__active-price active-price">1450р</div>
                              <div className="block-leaders-of-sells__old-price old-price">1540р</div>
                              <div className="block-leaders-of-sells__action action-num">-7%</div>
                           </div>
                           <div className="block-leaders-of-sells__description description-text">
                              <p>Композиция шаров на день рождения</p>
                           </div>
                        </div>
                        <div className="block-leaders-of-sells__item block-item">
                           <div className="block-leaders-of-sells__photo"><img src={lid} alt="lider" className="block-leaders-of-sells__img" /></div>
                           <div className="block-leaders-of-sells__block-price container-price">
                              <div className="block-leaders-of-sells__active-price active-price">1450р</div>
                              <div className="block-leaders-of-sells__old-price old-price">1540р</div>
                              <div className="block-leaders-of-sells__action action-num">-7%</div>
                           </div>
                           <div className="block-leaders-of-sells__description description-text">
                              <p>Композиция шаров на день рождения</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="block-works">
               <div className="block-works__container conteiner">
                  <div className="block-works__content-block">
                     <TitleBlock text={'Наши работы'} />
                     <Slider />
                  </div>
               </div>
            </div>
         </>
      )
   }
}
