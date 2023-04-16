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
   constructor(props) {
      super(props)
      this.state = {
         list_cat: [],
         menuActive: false,
      }
      this.domain = 'http://localhost:8000'
      this.menuActive = this.menuActive.bind(this);
   }
   componentDidMount() {
      axios.get(`${this.domain}/api/v1/category/?get_photo=false&limit=5`).then((response) => {
         this.setState({
            list_cat: response.data.results
         })
      })
   }
   componentDidUpdate(prevProps,prevState){
      if (prevState.menuActive !==  this.state.menuActive){
         if (this.state.menuActive === true){
            document.body.style.overflow = 'hidden';
         }else{
            document.body.style.overflow = 'auto';
         }
         
      }

   }
   menuActive(){
      this.setState({menuActive: !this.state.menuActive})
   }
   render() {
      return (
         <header>
            <div className="block-header">
               <div className="block-header__container conteiner">
                  <div className="block-header__main-column">
                     <div className={this.state.menuActive ? "block-header__row menu-activate" : "block-header__row"}>
                        <div className="block-header__logo">
                           <img src={logo} alt="logo" />
                        </div>
                        <div className="block-header__group-items">
                           <div className="block-header__btn">
                              <NavLink to="kategories/">
                                 <img src={elemK} alt="elemK" />
                                 <span>Каталог</span>
                              </NavLink>
                           </div>
                           <div className="block-header__search-input-block">
                              <img className="block-header__search-img" src={icon_search} alt="icon-search" />
                              <input className="block-header__search" type="text" placeholder="Поиск" />
                           </div>
                        </div>
                        <nav className={this.state.menuActive ? "nav-bar menu-activate" : "nav-bar"}>
                           <ul className="nav-bar__list">
                              <li className="nav-bar__item active"><Link to="/" className="nav-bar__link">Акции</Link></li>
                              <li className="nav-bar__item"><Link to="delivery/" className="nav-bar__link">Доставка</Link></li>
                              <li className="nav-bar__item"><Link to="contakts/" className="nav-bar__link">Контакты</Link></li>
                              <li className="nav-bar__item"><Link to="gallery/" className="nav-bar__link">Галерея</Link></li>
                              <li className="nav-bar__item"><Link to="reviews/" className="nav-bar__link">Отзывы</Link></li>
                           </ul>
                           <div className="nav-bar__burger" onClick={() => this.menuActive()}>
                              <span></span>
                           </div>
                        </nav>
                        <div className="block-header__shopping">
                           <Link to="shopping_cart">
                              <img className="block-header__icon" src={icon_shopping} alt="icon-shopping" />
                           </Link>
                        </div>
                     </div>
                     <div className="block-header__row">
                        <ul className="block-header__type-list">
                           {
                              this.state.list_cat && this.state.list_cat.map((data) =>
                                 <li key={data.id} className="block-header__type-item"><Link to={`kategories/${data.slug}`} className="block-header__tipe-link">{data.name.length > 10 ? <>{data.name.slice(0, 20)}...</> : data.name}</Link></li>)
                           }
                        </ul>
                        <div className={this.state.menuActive ? "block-header__info-container menu-activate" : "block-header__info-container"}>
                           <div className="block-header__tel">+7 861 204 24 46</div>
                           <ListMessagers />
                           <WorkTime />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      )
   }
}
