import React from 'react'
import Produkt from '../produkt/produkt'
import './style.css'

export default function Produkts(props) {
   return (
      <div className="block-leaders-of-sells__list-content-block row-flex">
         {(props.products_list?.length) ? props.products_list.map((data) =>
            <Produkt
               domain={props.domain}
               product={data}
               key={data.id} />
         ) :
         <div className='cap'>Продуктов пока нет!</div> 
         }
      </div>
   )
}
