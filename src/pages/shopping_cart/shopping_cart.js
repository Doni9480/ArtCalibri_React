import React, { useCallback, useEffect, useRef, useState } from 'react';
import TitleBlock from '../../components/block_titlle/title_block';
import './style.css'

import ShoppingItem from '../../components/shopping_item/ShoppingItem';
import axios from 'axios';

export default function ShoppingCart(props) {
   const [listCards, setListCards] = useState([]);
   const [orderParams, setOrderParams] = useState(JSON.parse(localStorage.getItem('orders')) || []);
   const [promocode, setPromocod] = useState(null);
   const [countProducts, setCountProducts] = useState(0);
   const [allSum, setAllSum] = useState(0);
   const domain = 'http://localhost:8000'

   useEffect(() => {
      const work_API = () => {
         let dataFromLocStor = JSON.parse(localStorage.getItem('orders')) || [];
         if (dataFromLocStor.length) {
            let getSlug = dataFromLocStor.map((obj) => obj.product_slug)
            axios.get('http://localhost:8000/api/v1/products/', { params: { product: getSlug } })
               .then((data) => {
                  setListCards(data.data.results);
               })
         }
      }
      work_API()
   }, [])

   useEffect(() => {
      localStorage.setItem('orders', JSON.stringify(orderParams));
      calculationCountProducts();
      calculationProductPriceAll();
   }, [listCards, orderParams])

   const handlerClick = (symbol, productSlug) => {
      if (orderParams?.find((el) => el.product_slug === productSlug)) {
         const copyData = orderParams.slice();
         const editData = copyData.map((el) => {
            if (el.product_slug === productSlug) {
               if (symbol === '+') {
                  el.count = el.count + 1;
               } else if (symbol === '-' && el.count > 1) {
                  el.count = el.count - 1;
               }
               return el
            } else {
               return el
            }
         });
         setOrderParams(editData);
      }
   }

   const calculationProductPrice = (obj, count) => {
      return obj.prices.price_active * count
   }

   const removeProductCard = (id) => {
      const order_data = listCards.slice()
      let edit_data = order_data.filter((element) => {
         if (element.id !== id) {
            return element
         } else {
            const getCopy = orderParams.slice();
            const newData = getCopy.filter((el) => el.product_slug !== element.slug);
            setOrderParams(newData);
         }
      })
      setListCards([...edit_data])
      calculationCountProducts();
      calculationProductPriceAll();
   }

   const calculationCountProducts = () => {
      let count = orderParams.map((element) => element.count).reduce((a, b) => a + b, 0)
      setCountProducts(count)
   }

   const calculationProductPriceAll = () => {
      let all_price = listCards.map((element) => calculationProductPrice(element, orderParams?.find((el) => el.product_slug === element.slug)?.count)).reduce((a, b) => a + b, 0);
      setAllSum(all_price)
   }

   const useDebounce = (callback, delay) => {
      const timer = useRef(null);

      const debounceCallback = useCallback((...args) => {
         if (timer.current) {
            clearTimeout(timer.current);
         }

         timer.current = setTimeout(() => {
            callback(...args)
         }, delay)
      }, [callback, delay])
      return debounceCallback;
   }

   const searchPromocods = useDebounce(async (value) => {
      const response = await axios.get(`${domain}/api/v1/promocode/`, { params: { query: value } });
      console.log(response.data.promo_code);
      if (response.data.promo_code) {
         setPromocod(response.data.promo_code);
      }
      console.log(promocode);
   }, 500)

   return (
      <>
         <TitleBlock text={'Корзина'} isPageTitle={true} />
         <div className='shopping-content'>
            {orderParams?.length ? <>
               <div className='shopping-content__products-list'>
               {
                  listCards && listCards.map((card) => {
                     const count = orderParams?.find((el) => el.product_slug === card.slug)?.count
                     const sum = calculationProductPrice(card, (orderParams?.length ? orderParams.find((el) => el.product_slug === card.slug)?.count : 1))


                     return <ShoppingItem
                        data={card}
                        domain={domain}
                        count={count}
                        products_sum={sum}
                        handlerClick={handlerClick}
                        key={card.id}
                        num={listCards.indexOf(card) + 1}
                        onDelete={removeProductCard} />
                  })
               }
            </div>
            <div className='shopping-content__block-info'>
               <div className='shopping-content__block-info-body'>
                  <div className='shopping-content__block-info-title'>
                     Итого
                  </div>
                  <div className='shopping-content__block-product-list-count'>
                     <div className='shopping-content__text-title'>
                        <span>{listCards.length}</span>позиций
                     </div>
                     <div className='shopping-content__text-title'>
                        <span>{countProducts}</span>товаров
                     </div>
                  </div>
                  <div className='shopping-content__block-info-price'>
                     <div className='shopping-content__block-info-price-items'>
                        <div className='shopping-content__block-info-price-item-label'>Сумма заказа</div>
                        <div className='shopping-content__block-info-price-item-value'>
                           {allSum && <>{allSum}<span>p</span></>}
                        </div>
                     </div>
                     <div className='shopping-content__block-info-price-items'>
                        <div className='shopping-content__block-info-price-item-label'>Промокод</div>
                        <div className='shopping-content__block-info-price-item-value'>
                           {promocode ? promocode.title : <input className='sort-form__price-input' type='text' placeholder='Код' maxLength={8} onChange={(e) => searchPromocods(e.target.value)} />}
                        </div>
                     </div>
                     <div className='shopping-content__block-info-price-items'>
                        <div className='shopping-content__block-info-price-item-label'>Скидка по коду</div>
                        <div className='shopping-content__block-info-price-item-value'>
                           {promocode ? <>{promocode.discount}<span>%</span></> : 0}
                        </div>
                     </div>
                  </div>
                  <div className='shopping-content__block-all-price'>
                     {promocode ? allSum - Math.round(Math.round(allSum / 100) * promocode.discount) : allSum}<span>p</span>
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
            </> : <div className='product-none'>Корзина пуст!</div>}
         </div>
      </>
   )
}
