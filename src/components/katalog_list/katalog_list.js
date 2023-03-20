import React, { Component } from 'react'
import KatalogCard from '../Katolog_card/katolog_card'

import './style.css'

import kat1 from './../../img/ki1.jpg'
import kat2 from './../../img/ki2.jpg'

export default class KatalogList extends Component {
   render() {
      const list_katolog = [
         {
            id: 0,
            name: 'Баблобоксы',
            img: kat1,
            url: '###'
         },
         {
            id: 1,
            name: 'Фонтаны с цифрами',
            img: kat1,
            url: '###'
         },
         {
            id: 2,
            name: 'Готовые композиции',
            img: kat1,
            url: '###'
         },
         {
            id: 3,
            name: 'Шарики, наборы, оформление комнаты на выписку',
            img: kat1,
            url: '###'
         },
         {
            id: 4,
            name: 'Латексные шары',
            img: kat2,
            url: '###'
         },
         {
            id: 5,
            name: 'Шарики на день рождения',
            img: kat2,
            url: '###'
         },
         {
            id: 6,
            name: 'Фольгированые шары',
            img: kat2,
            url: '###'
         },
         {
            id: 7,
            name: '3D Сферы, Bubble',
            img: kat2,
            url: '###'
         },
      ]
      return (
         <div className="block-trend-kategori__list-kategori">
            {
               list_katolog.map(data => 
                  <KatalogCard data={data} key={data.id}/>
                  )
            }
         </div>
      )
   }
}
