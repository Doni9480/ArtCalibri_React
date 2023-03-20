import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "./style.css"

import logo from './../../img/logo.png'
import elemK from './../../img/elemK.svg'
import icon_search from './../../img/icon-search.svg'
import icon_shopping from './../../img/icon-shopping_bag.svg'

import WorkTime from '../work_time/work_time'
import ListMessagers from '../list_mess/list_messagers'




export default class Header extends Component {
   render() {
      return (
         <header>
            <div className="block-header">
               <div className="block-header__container conteiner">
                  <div className="block-header__main-column">
                     <div className="block-header__row">
                        <div className="block-header__logo">
                           <img src={logo} alt="logo"/>
                        </div>
                        <div className="block-header__group-items">
                           <div className="block-header__btn">
                              <Link to="kategories/">
                                 <img src={elemK} alt="elemK"/>
                                    <span>Каталог</span>
                              </Link>
                           </div>
                           <div className="block-header__search-input-block">
                              <img className="block-header__search-img" src={icon_search} alt="icon-search"/>
                                 <input className="block-header__search" type="text" placeholder="Поиск"/>
                                 </div>
                           </div>
                           <nav className="nav-bar">
                              <ul className="nav-bar__list">
                                 <li className="nav-bar__item active"><Link to="/" className="nav-bar__link">Акции</Link></li>
                                 <li className="nav-bar__item"><Link to="delivery/" className="nav-bar__link">Доставка</Link></li>
                                 <li className="nav-bar__item"><Link to="contakts/" className="nav-bar__link">Контакты</Link></li>
                                 <li className="nav-bar__item"><Link to="gallery/" className="nav-bar__link">Галерея</Link></li>
                                 <li className="nav-bar__item"><Link to="reviews/" className="nav-bar__link">Отзывы</Link></li>
                              </ul>
                              <div className="nav-bar__burger">
                                 <span></span>
                              </div>
                           </nav>
                           <div className="block-header__shopping">
                              <Link to="shopping_cart">
                                 <img className="block-header__icon" src={icon_shopping} alt="icon-shopping"/>
                              </Link>
                           </div>
                        </div>
                        <div className="block-header__row">
                           <ul className="block-header__type-list">
                              <li className="block-header__type-item"><a href="###" className="block-header__tipe-link">Латексные шары</a></li>
                              <li className="block-header__type-item"><a href="###" className="block-header__tipe-link">Фольгированые шары</a></li>
                              <li className="block-header__type-item"><a href="###" className="block-header__tipe-link">Цифры</a></li>
                              <li className="block-header__type-item"><a href="###" className="block-header__tipe-link">3D Сферы</a></li>
                              <li className="block-header__type-item"><a href="###" className="block-header__tipe-link">Хромовые шары</a></li>
                           </ul>
                           <div className="block-header__info-container">
                              <div className="block-header__tel">+7 861 204 24 46</div>
                              <ListMessagers/>
                              <WorkTime/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </header>
      )
   }
}
