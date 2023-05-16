import React, { useEffect, useState } from 'react';
import TitleBlock from '../../components/block_titlle/title_block';
import './style.css'

import ShoppingItem from '../../components/shopping_item/ShoppingItem';
import WorkWithLocalStorage from '../../utils/WorkWithLocalStorage';
import ProductService from '../../API/ProductService';
import useDebounce from '../../hooks/useDebounce';
import PromocodeService from '../../API/PromocodeService';

export default function ShoppingCart(props) {
   const [listCards, setListCards] = useState([]);
   const [orderParams, setOrderParams] = useState([]);
   const [promocode, setPromocod] = useState(null);
   const [countProducts, setCountProducts] = useState(0);
   const [allSum, setAllSum] = useState(0);
   const domain = 'https://artcalibridrfbackend-production.up.railway.app'

   useEffect(() => {
      setOrderParams(WorkWithLocalStorage.getAllOrders());
      const fetchListProduct = async () => {
         const getListProductId = WorkWithLocalStorage.getOnly('product_id');
         const response = await ProductService.getProductsById(getListProductId);
         setListCards(response.data.results)
      }
      fetchListProduct();
   }, [])

   useEffect(() => {
      calculationCountProducts();
      calculationProductPriceAll();
   }, [listCards, orderParams])

   const handlerClick = (count, productId) => {
      const newList = WorkWithLocalStorage.updateOrder(productId, count);
      setOrderParams(newList)
   }

   const calculationProductPrice = (obj, count) => {
      return obj.prices.price_active * count
   }

   const removeProductCard = (id) => {
      const newList = WorkWithLocalStorage.removeOrder(id);
      setOrderParams(newList);
      const newListProduct = listCards.filter((element) => element.id !== id);
      setListCards(newListProduct)
      }

   const calculationCountProducts = () => {
         let count = WorkWithLocalStorage.getOnly('count').reduce((a, b) => a + b, 0)
         setCountProducts(count)
      }

      const calculationProductPriceAll = () => {
         let all_price = listCards.map((element) => calculationProductPrice(element, 
            orderParams?.find(
               (el) => el.product_id === element.id)?.count
               )).reduce((a, b) => a + b, 0);
         setAllSum(all_price)
      }

      const searchPromocods = useDebounce(async (value) => {
         const response = await PromocodeService.getPtomocodeByName(value);
         if (response.data.promo_code) {
            setPromocod(response.data.promo_code);
         }
      }, 500)

      return (
         <>
            <TitleBlock text={'Корзина'} isPageTitle={true} />
            <div className='shopping-content'>
               {orderParams?.length ? <>
                  <div className='shopping-content__products-list'>
                     {
                        listCards && listCards.map((card) => {
                           const count = orderParams?.find((el) => el.product_id === card.id)?.count
                           const sum = calculationProductPrice(card, (orderParams?.length ? orderParams.find((el) => el.product_id === card.id)?.count : 1))

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
               </> : <div className='product-none cap'>Корзина пуст!</div>}
            </div>
         </>
      )
   }
