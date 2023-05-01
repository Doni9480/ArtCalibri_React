import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useDebounce from '../../hooks/useDebounce'
import ProductService from '../../API/ProductService'
import icon_search from './../../img/icon-search.svg'
import './style.css'

export default function SearchInput() {
   const [searchValue, setSearchValue] = useState('');
   const [productList, setProductList] = useState(null);

   const searchInputHandler = useDebounce(async (event) => {
      if (event.target.value.length > 1) {
         setSearchValue(event.target.value);
         const response = await ProductService.getProductBySearch(event.target.value)
         setProductList(response.data.results);
      } else {
         setSearchValue(event.target.value);
      }
   }, 500);

   return (
      <div className="block-header__search-input-block">
         <img className="block-header__search-img" src={icon_search} alt="icon-search" />
         <input className="block-header__search" type="text" placeholder="Поиск"
            onChange={(event) => searchInputHandler(event)} />
         {
            searchValue.length > 1 ? productList?.length ?
               <ul className='block-header__search-reesponse-list'>
                  {
                     productList?.map((item) =>
                        <li className='block-header__search-reesponse-item' key={item.id}>
                           <Link to={`/kategories/${item.cat_id}/${item.slug}`}
                              className='block-header__search-reesponse-item-link'>
                              {item.description.length > 40 ? <>{item.description.slice(0, 40)}...</> : item.description}
                           </Link>
                        </li>
                     )
                  }
               </ul> :
               <ul className='block-header__search-reesponse-list'>
                  <li className='block-header__search-reesponse-item'>
                     Нет совпадений
                  </li>
               </ul> :
               <ul className='block-header__search-reesponse-list'>
                  <li className='block-header__search-reesponse-item' style={{ color: "red", opacity: 0.5 }}>
                     Введите болие одного символа
                  </li>
               </ul>
         }
      </div>
   )
}
