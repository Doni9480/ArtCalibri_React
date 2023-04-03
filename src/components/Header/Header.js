import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import "./style.css"

import logo from './../../img/logo.png'
import elemK from './../../img/elemK.svg'
import icon_search from './../../img/icon-search.svg'
import icon_shopping from './../../img/icon-shopping_bag.svg'

import WorkTime from '../work_time/work_time'
import ListMessagers from '../list_mess/list_messagers'
import axios from 'axios'


export default class Header extends Component {
   constructor(props){
      super(props)
      this.state = {
         list_cat: []
      }
      this.domain = 'http://localhost:8000'
   }
   componentDidMount(){
      axios.get(`${this.domain}/api/v1/category/?limit=5`).then((response) => {
         this.setState({
            list_cat: response.data
         })
      })
   }
   componentDidUpdate(Props,State){
      if (State.list_cat !== this.state.list_cat){
         console.log('l')
         // this.state.list_cat.categoryes.map((data) => console.log('s', data))
      }
   }
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
                              <NavLink to="kategories/">
                                 <img src={elemK} alt="elemK"/>
                                    <span>Каталог</span>
                              </NavLink>
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
                              {
                                 this.state.list_cat.categoryes && this.state.list_cat.categoryes.map((data) => 
                                 <li key={data.id} className="block-header__type-item"><Link to={`kategories/${data.slug}`} className="block-header__tipe-link">{data.name.length > 10 ? <>{data.name.slice(0, 20)}...</> : data.name}</Link></li>)
                              }
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
