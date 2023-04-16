import React, { useEffect, useState, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SliderProduktDetails from '../../components/slider/slider2'
import './style.css'
import TitleBlock from '../../components/block_titlle/title_block'


export default function ProductDetails(props) {
   const { details } = useParams();
   const [product, setProduct] = useState({});
   const [activePrice, setActivePrice] = useState(0)
   const [oldPrice, setOldPrice] = useState(0)
   const [action, setAction] = useState('')
   const [typeGas, setTypeGas] = useState('air')
   const [hasProdToShopping, setHasProdToShopping] = useState(false)

   const domain = 'http://localhost:8000'

   useEffect(() => {
      axios.get(`http://localhost:8000/api/v1/products/${details}/`)
         .then((res) => {
            setProduct(res.data);
            console.log(res.data);
         })
   }, [details])

   useEffect(() => {
      if (product.id) {
         setActivePrice(Math.round(product.prices.price_active))
         setOldPrice(product.prices.price_old ? Math.round(product.prices.price_old) - activePrice > 0 ? Math.round(product.prices.price_old) : null : null)
         setAction(oldPrice ? Math.round(((activePrice - oldPrice) / activePrice) * 100) : null)
         checkShoppingHasProduct();
      }
   }, [product])

   const inputHandler = (event) => {
      setTypeGas(event.target.value);
      const getDataFromLocStor = JSON.parse(localStorage.getItem('orders'));
      const newData = getDataFromLocStor.map((item) => {
         if (item.product_slug === product.slug){
            item.gas = typeGas;
            return item
         }else{
            return item
         }
      })
      localStorage.setItem('orders', JSON.stringify(newData));
   }

   const submitHandler = (event) => {
      console.log('clock!');
      const getDataFromLocStor = localStorage?.getItem('orders') ? JSON.parse(localStorage?.getItem('orders')) : [];
      const checkData = getDataFromLocStor.find((item) => item.product_slug === product.slug);
      if (!checkData){
         getDataFromLocStor.push({product_slug: product.slug, count: 1, gas: typeGas})
         checkShoppingHasProduct();
      }
      localStorage.setItem('orders', JSON.stringify(getDataFromLocStor));
      event.preventDefault();
   }

   const checkShoppingHasProduct = () => {
      const getDataFromLocStor = localStorage?.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
      const checkData = getDataFromLocStor.find((item) => item.product_slug === product.slug);
      if (checkData){
         setHasProdToShopping(true);
      }
   }

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
                        <input className='product-action__radio-btn' type='radio' name='gas' value='air' onChange={inputHandler} id='air' defaultChecked/>
                        <label className='product-action__radio-label' htmlFor='air'>Воздух</label>
                        <input className='product-action__radio-btn' type='radio' name='gas' value='helium' onChange={inputHandler} id='helium' />
                        <label className='product-action__radio-label' htmlFor='helium'>Гелий</label>
                        {!hasProdToShopping ? 
                        <button className='product-action__btn-sopping' type='submit' >В корзину</button> :
                        <button className='product-action__btn-sopping' type='submit' disabled style={{opacity: 0.5}}>В корзину</button>}
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
