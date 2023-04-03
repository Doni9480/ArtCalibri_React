import React, { Component } from 'react'
import axios from 'axios'
import "./style.css"

import sh from './../../img/sh.png'

import banner from './../../img/banner-bg.png'

import Slider from '../../components/slider/slider'
import KatalogList from '../../components/katalog_list/katalog_list'
import TitleBlock from '../../components/block_titlle/title_block'
import Produkts from '../../components/produkts/produkts'


export default class Main extends Component {
   constructor(props) {
      super(props)
      this.state = {
         list_katolog: [],
         list_lider_products: {},
         list_action_products: {},
         list_images: []
      }
      this.domain = 'http://localhost:8000'
   }
   componentDidMount() {
      let data_res;
      axios.get(`${this.domain}/api/v1/category/?limit=0`)
         .then((data) => {
            data_res = data.data;
            this.setState({
               list_katolog: data_res
            })
         })
      axios.get(`${this.domain}/api/v1/products/?limit=5&title=true`)
         .then((data) => {
            this.setState({ list_lider_products: data.data });
         });
      axios.get(`${this.domain}/api/v1/products/?limit=5&title=true&action=true`)
         .then((data) => {
            this.setState({ list_action_products: data.data });
         });
      axios.get(`${this.domain}/api/v1/gallery/?limit=10`)
         .then((data) => {
            this.setState({ list_images: data.data });
         })
   }

   componentDidUpdate(prevProps, prevState){
      if (prevState.list_images !== this.state.list_images){
         this.render()
      }
      if (prevState.list_katolog !== this.state.list_katolog){
         this.render()
      }
   }

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
                     <KatalogList domain={this.domain} list_katolog={this.state.list_katolog.categoryes ? this.state.list_katolog.categoryes : []} />
                  </div>
               </div>
            </div>
            <div className="block-leaders-of-sells">
               <div className="block-leaders-of-sells__container conteiner">
                  <div className="block-leaders-of-sells__content-block">
                     <TitleBlock text={'Лидеры продаж'} link={"###"} />
                     <Produkts domain={this.domain} products_list={this.state.list_lider_products} />
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
                     <Produkts domain={this.domain} products_list={this.state.list_action_products} />
                  </div>
               </div>
            </div>
            <div className="block-works">
               <div className="block-works__container conteiner">
                  <div className="block-works__content-block">
                     <TitleBlock text={'Наши работы'} />
                     <Slider domain={this.domain} list_images={this.state.list_images ? this.state.list_images.photos : []} />
                  </div>
               </div>
            </div>
         </>
      )
   }
}
