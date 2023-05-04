import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductService from '../../API/ProductService'
import CategoryService from '../../API/CategoryService'
import OrderService from '../../API/OrderService'
import GalleryService from '../../API/GalleryService'
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
      this.domain = 'https://artcalibridrfbackend-production.up.railway.app'
   }
   componentDidMount() {
      const fetchCategory = async () => {
         const response = await CategoryService.getCategory();
         this.setState({
            list_katolog: response.data.results
         })
      }
      fetchCategory();
      const fetchLidersScale = async () => {
         const response = await OrderService.getLidSale();
         this.setState({
            list_lider_products: response.data.results
         })
      }
      fetchLidersScale();
      
      const fetchPromotions = async () => {
         const response = await ProductService.getPromotions();
         this.setState({
            list_action_products: response.data.results
         })
      }
      fetchPromotions();
      
      const fetchListImages = async () => {
         const response = await GalleryService.getPhoto();
         this.setState({
            list_images: response.data.results
         })
      }
      fetchListImages();
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
                           <Link className="block-head__btn-link wait-bg" to="/kategories/actions">Все акции</Link>
                        </div>
                        <div className="block-head__btn-item">
                           <Link className="block-head__btn-link" to="/kategories/actions">Подробнее</Link>
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
                     <KatalogList domain={this.domain} list_katolog={this.state.list_katolog ? this.state.list_katolog : []} />
                  </div>
               </div>
            </div>
            <div className="block-leaders-of-sells">
               <div className="block-leaders-of-sells__container conteiner">
                  <div className="block-leaders-of-sells__content-block">
                     <TitleBlock text={'Лидеры продаж'} link={"/kategories/lid_sale"} />
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
                     <TitleBlock text={'Акции'} link={"/kategories/actions"} />
                     <Produkts domain={this.domain} products_list={this.state.list_action_products} />
                  </div>
               </div>
            </div>
            <div className="block-works">
               <div className="block-works__container conteiner">
                  <div className="block-works__content-block">
                     <TitleBlock text={'Наши работы'} />
                     <Slider der list_images={this.state.list_images ? this.state.list_images : []} />
                  </div>
               </div>
            </div>
         </>
      )
   }
}
