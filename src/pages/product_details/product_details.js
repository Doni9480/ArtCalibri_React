import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SliderProduktDetails from '../../components/slider/slider2'
import TitleBlock from '../../components/block_titlle/title_block'
import ProductService from '../../API/ProductService'
import WorkWithLocalStorage from '../../utils/WorkWithLocalStorage'
import DiscountCalculation from '../../utils/DiscountCalculation'
import './style.css'


export default function ProductDetails(props) {
   const { details } = useParams();
   const [product, setProduct] = useState({});
   const [activePrice, setActivePrice] = useState(0)
   const [oldPrice, setOldPrice] = useState(0)
   const [action, setAction] = useState('')
   const [typeGas, setTypeGas] = useState(null)
   const [hasProdToShopping, setHasProdToShopping] = useState(false)

   const domain = 'http://localhost:8000'

   useEffect(() => {
      const fetchProductDetails = async () => {
         const response = await ProductService.getProductDetails(details);
         setProduct(response.data)
      }
      fetchProductDetails();
   }, [details])

   useEffect(() => {
      if (product.id) {
         const [ap, op, di] = DiscountCalculation(product.prices.price_active, product.prices.price_old);
         setActivePrice(ap);
         setOldPrice(op);
         setAction(di);
      }
      const typeGasFromLS = WorkWithLocalStorage.getProduct(product.id);
      setTypeGas(typeGasFromLS?.gas);
      console.log(1);
   }, [product, hasProdToShopping])

   const radioInputHandler = (event) => {
      setTypeGas(event.target.value);
      WorkWithLocalStorage.updateOrder(product.id, 1, event.target.value);
   }

   const submitHandler = (event) => {
      setTypeGas(event.target.gas.value);
      WorkWithLocalStorage.saveNewOrder(product.id, 1, event.target.gas.value)
      event.preventDefault();
   }

   const checkShoppingHasProduct = () => {
      const checkData = WorkWithLocalStorage.ordersHasProduct(product.id);
      if (checkData) {
         setHasProdToShopping(true);
      }
   }
   console.log(2);
   checkShoppingHasProduct();

   return (
      <div className='product-details'>
         <div className='product-details__item-block'>
            <SliderProduktDetails domain={domain} photos={product.photo} />
         </div>
         <div className='product-details__item-block'>
            <div className='product-details__text-content'>
               <div className='product-details__description'>
                  <TitleBlock text={product.description} isPageTitle={true} className='product-details__description' />
               </div>
               <div className='product-details__price-artikul'>
                  <div className='product-details__price'>
                     <div className='product-details__active-price'>
                        {activePrice}
                        <span>p</span>
                     </div>
                     <div className='product-old-price'>
                        {oldPrice && <>{oldPrice}<span>p</span></>}
                     </div>
                     <div className='product-action'>
                        {action ? <>{action}%</> : ''}
                     </div>
                  </div>
                  <div className='product-action__artikul'>
                     Артикул <span>{product.product_number}</span>
                  </div>
               </div>
               <div className='product-action__options'>
                  <div className='subtitle-text'>
                     Чем надуть шары
                  </div>
                  <div className='product-action__radio-input'>
                     <form className='product-action__form' onSubmit={submitHandler}>
                        <input className='product-action__radio-btn' type='radio' name='gas' value='air' onChange={radioInputHandler} id='air' defaultChecked={typeGas === 'air' ? true : false} />
                        <label className='product-action__radio-label' htmlFor='air'>Воздух</label>
                        <input className='product-action__radio-btn' type='radio' name='gas' value='helium' onChange={radioInputHandler} id='helium' defaultChecked={typeGas === 'helium' ? true : false} />
                        <label className='product-action__radio-label' htmlFor='helium'>Гелий</label>
                        {!hasProdToShopping ?
                           <button className='product-action__btn-sopping' type='submit' >В корзину</button> :
                           <button className='product-action__btn-sopping' type='submit' disabled style={{ opacity: 0.5 }}>В корзину</button>}
                     </form>
                  </div>
               </div>
               <div className='product-details__compound'>
                  <div className='subtitle-text'>
                     Состав
                  </div>
                  <ul className='product-details__compound-list'>
                     <li className='product-details__compound-item'>
                        <div className='product-item-name'>Шар латоксный</div>
                        <div className='product-details__item-count'>9 <span>шт</span></div>
                     </li>
                     <li className='product-details__compound-item'>
                        <div className='product-item-name'>Шар 3D</div>
                        <div className='product-details__item-count'>1 <span>шт</span></div>
                     </li>
                     <li className='product-details__compound-item'>
                        <div className='product-item-name'>Наклейки</div>
                        <div className='product-details__item-count'>7 <span>шт</span></div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}
