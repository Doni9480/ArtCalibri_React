import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import CategoryService from '../../API/CategoryService'
import WorkTime from '../work_time/work_time'
import ListMessagers from '../list_mess/list_messagers'
import SearchInput from '../searchInput/searchInput'
import logo from './../../img/logo.png'
import elemK from './../../img/elemK.svg'
import icon_shopping from './../../img/icon-shopping_bag.svg'
import "./style.css"


export default class Header extends Component {
   constructor(props) {
      super(props)
      this.state = {
         list_cat: [],
         menuActive: false,
      }
      this.domain = 'https://artcalibridrfbackend-production.up.railway.app'
      this.menuActive = this.menuActive.bind(this);
   }
   componentDidMount() {
      const fetchListCat = async () => {
         const response = await CategoryService.getCategory(5, false);
         this.setState({
            list_cat: await response?.data?.results
         })
      };
      fetchListCat();
      }
   scrollBarBody(stateMenu) {
      if (stateMenu) {
         document.body.style.overflow = 'auto';
      } else {
         document.body.style.overflow = 'hidden';
      }
   }
   menuActive() {
      this.setState({ menuActive: !this.state.menuActive })
      this.scrollBarBody(this.state.menuActive);
   }
   render() {
      return (
         <header>
            <div className="block-header">
               <div className="block-header__container conteiner">
                  <div className="block-header__main-column">
                     <div className={this.state.menuActive ? "block-header__row menu-activate" : "block-header__row"}>
                        <div className='block-header__row-content-body'>
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
                              <SearchInput />
                           </div>
                           <nav className={this.state.menuActive ? "nav-bar menu-activate" : "nav-bar"}>
                              <ul className="nav-bar__list">
                                 <li className="nav-bar__item"><NavLink to="/" className="nav-bar__link" onClick={() => this.setState({ menuActive: !this.state.menuActive})}>Акции</NavLink></li>
                                 <li className="nav-bar__item"><NavLink to="delivery/" className="nav-bar__link" onClick={() => this.setState({ menuActive: !this.state.menuActive})}>Доставка</NavLink></li>
                                 <li className="nav-bar__item"><NavLink to="contakts/" className="nav-bar__link" onClick={() => this.setState({ menuActive: !this.state.menuActive})}>Контакты</NavLink></li>
                                 <li className="nav-bar__item"><NavLink to="gallery/" className="nav-bar__link" onClick={() => this.setState({ menuActive: !this.state.menuActive})}>Галерея</NavLink></li>
                                 <li className="nav-bar__item"><NavLink to="reviews/" className="nav-bar__link" onClick={() => this.setState({ menuActive: !this.state.menuActive})}>Отзывы</NavLink></li>
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
                     </div>
                     <div className="block-header__row">
                        <ul className="block-header__type-list">
                           {
                              this.state.list_cat?.length && this.state.list_cat.map((data) =>
                                 <li key={data.id} className="block-header__type-item"><NavLink to={`kategories/${data.slug}`} className="block-header__tipe-link">{data.name.length > 10 ? <>{data.name.slice(0, 20)}...</> : data.name}</NavLink></li>)
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
