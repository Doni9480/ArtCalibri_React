import React from 'react'
import Produkt from '../produkt/produkt'
import './style.css'

export default function Produkts(props) {
   return (
      <div className="block-leaders-of-sells__list-content-block row-flex">
         {props.products_list.products && props.products_list.products.map((data) =>
            <Produkt
               domain={props.domain}
               product={data}
               product_img={props.products_list.gallery.filter(d => d.product === data.id)}
               product_price={props.products_list.prices.filter(d => d.product === data.id)}
               key={data.id} />
         )}
      </div>
   )
}
