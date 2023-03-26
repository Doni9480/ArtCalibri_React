import React, { Component } from 'react';
import TitleBlock from '../../components/block_titlle/title_block';
import './style.css'

import s1 from './../../img/w1.jpg'
import s2 from './../../img/w2.jpg'
import s3 from './../../img/w1.jpg'
import s4 from './../../img/w3.jpg'
import s5 from './../../img/w4.jpg'

// import s5 from './../../img/'
import ShoppingItem from '../../components/shopping_item/ShoppingItem';

export default class ShoppingCart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         list_cards: [{
            id: 1,
            description: 'Композиция шаров на день рождения для мальчика',
            active_price: 1450,
            old_price: 1540,
            action: -7,
            product_number: 54223,
            img_url: { s1 },
            count: 1,
         },
         {
            id: 2,
            description: 'Композиция шаров на день рождения для мальчика',
            active_price: 1050,
            old_price: 1540,
            action: -17,
            product_number: 54993,
            img_url: { s2 },
            count: 1,
         },
         {
            id: 3,
            description: 'Композиция шаров на день рождения для мальчика',
            active_price: 1320,
            old_price: 1540,
            action: -5,
            product_number: 67223,
            img_url: { s3 },
            count: 1,
         },
         {
            id: 4,
            description: 'Композиция шаров на день рождения для мальчика',
            active_price: 1380,
            old_price: 1540,
            action: -6,
            product_number: 54234,
            img_url: { s4 },
            count: 1,
         },
         {
            id: 5,
            description: 'Композиция шаров на день рождения для мальчика',
            active_price: 1345,
            old_price: 1540,
            action: -3,
            product_number: 54232,
            img_url: { s5 },
            count: 1,
         }
         ],
         promocod_data: 0,
         count_products: 0,
         all_price: 0

      }
      this.handlerClick = this.handlerClick.bind(this);
      this.calculationCountProducts = this.calculationCountProducts.bind(this);
      this.searchPromocods = this.searchPromocods.bind(this);
      this.removeProductCard = this.removeProductCard.bind(this);
   }

   componentDidMount() {
      this.calculationCountProducts();
      this.calculationProductPriceAll();
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.state.list_cards !== prevState.list_cards) {
         // console.log(prevProps, prevState);
         this.calculationCountProducts();
         this.calculationProductPriceAll();
      }


   }

   calculationCountProducts() {

      let count = this.state.list_cards.map((element) => element.count).reduce((a, b) => a + b, 0)

      this.setState({
         count_products: count
      })
      return this.state.count_products
   }

   handlerClick(symbol, id) {
      const order_data = this.state.list_cards.slice()
      let edit_data = order_data.map((element) => {
         if (element.id === id) {
            if (symbol === '+') {
               element.count += 1;
            } else if (symbol === '-') {
               if (element.count > 1) {
                  element.count -= 1;
               }
            }
            return element
         } else {
            return element
         }
      });
      this.setState({
         list_cards: [...edit_data]
      })

   }

   calculationProductPrice(obj) {
      // this.calculationCountProducts()
      return obj.active_price * obj.count
   }

   calculationProductPriceAll() {
      let all_price = this.state.list_cards.map((element) => this.calculationProductPrice(element)).reduce((a, b) => a + b, 0);
      this.setState({
         all_price: all_price
      })
   }

   searchPromocods(val) {
      const list_promocods = [
         {
            id: 1,
            promocod: '335A',
            discount: 76
         },
         {
            id: 2,
            promocod: '334B',
            discount: 54
         },
         {
            id: 3,
            promocod: '135S',
            discount: 128
         },
         {
            id: 4,
            promocod: '111A',
            discount: 760
         }
      ]
      let isActivePromocod = list_promocods.find((elem) => {
         if (elem.promocod === val) {
            return elem
         }
      });
      if (isActivePromocod) {
         this.setState({
            promocod_data: isActivePromocod
         })
      }

   }

   removeProductCard(id) {
      const order_data = this.state.list_cards.slice()
      let edit_data = order_data.filter((element) => element.id !== id)
      this.setState({
         list_cards: [...edit_data]
      })
      // this.calculationCountProducts();
      // this.calculationProductPriceAll();
   }

   render() {
      return (
         <>
            <TitleBlock text={'Корзина'} />
            <div className='shopping-content'>
               <div className='shopping-content__products-list'>
                  {
                     this.state.list_cards.map((card) =>
                        <ShoppingItem
                           data={card}
                           count={this.calculationProductPrice(card)}
                           handlerClick={this.handlerClick}
                           key={card.id}
                           onDelete={this.removeProductCard} />
                     )
                  }
               </div>
               <div className='shopping-content__block-info'>
                  <div className='shopping-content__block-info-body'>
                     <div className='shopping-content__block-info-title'>
                        Итого
                     </div>
                     <div className='shopping-content__block-product-list-count'>
                        <div className='shopping-content__text-title'>
                           <span>{this.state.list_cards.length}</span>позиций
                        </div>
                        <div className='shopping-content__text-title'>
                           <span>{this.state.count_products}</span>товаров
                        </div>
                     </div>
                     <div className='shopping-content__block-info-price'>
                        <div className='shopping-content__block-info-price-items'>
                           <div className='shopping-content__block-info-price-item-label'>Сумма заказа</div>
                           <div className='shopping-content__block-info-price-item-value'>
                              {this.state.all_price}<span>p</span>
                           </div>
                        </div>
                        <div className='shopping-content__block-info-price-items'>
                           <div className='shopping-content__block-info-price-item-label'>Промокод</div>
                           <div className='shopping-content__block-info-price-item-value'>
                              {this.state.promocod_data ? this.state.promocod_data.promocod : <input className='sort-form__price-input' type='text' placeholder='Код' onChange={(e) => this.searchPromocods(e.target.value)} />}
                           </div>
                        </div>
                        <div className='shopping-content__block-info-price-items'>
                           <div className='shopping-content__block-info-price-item-label'>Скидка по коду</div>
                           <div className='shopping-content__block-info-price-item-value'>
                              {this.state.promocod_data ? this.state.promocod_data.discount : 0}<span>p</span>
                           </div>
                        </div>
                     </div>
                     <div className='shopping-content__block-all-price'>
                        {this.state.promocod_data ? this.state.all_price - this.state.promocod_data.discount : this.state.all_price}<span>p</span>
                     </div>
                     <div className='shopping-content__block-book'>
                        <form className='shopping-content__form-book'>
                           <div className='shopping-content__form-input'>
                              <input className='shopping-content__input' type='tel' placeholder='Ваш номер телефона' />
                           </div>
                           <div className='shopping-content__form-btn'>
                              <button className='shopping-content__btn'>Заказать</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </>
      )
   }
}
