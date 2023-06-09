import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function KatalogCard(props) {
   return (
      <div className="block-trend-kategori__block-item">
         <div className="block-trend-kategori__photo"><img src={`${props.domain}${props.data.title_photo}`} alt={props.data.slug} className="block-trend-kategori__img" /></div>
         <div className="block-trend-kategori__block-kategori-name">
            <Link to={`/kategories/${props.data.slug}`} className="block-trend-kategori__block-kategori-name-link">
               {props.data.name}
            </Link></div>
      </div>
   )
}
