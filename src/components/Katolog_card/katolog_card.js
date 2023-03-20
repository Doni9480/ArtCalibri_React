import React from 'react'

import './style.css'

export default function KatalogCard(props) {
   return (
      <div className="block-trend-kategori__block-item">
         <div className="block-trend-kategori__photo"><img src={props.data.img} alt="ph" className="block-trend-kategori__img" /></div>
         <div className="block-trend-kategori__block-kategori-name"><a href={props.data.url} className="block-trend-kategori__block-kategori-name-link">
            {props.data.name}
         </a></div>
      </div>
   )
}
