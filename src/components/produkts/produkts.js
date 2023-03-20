import React from 'react'
import Produkt from '../produkt/produkt'
import './style.css'

import lid from './../../img/lid.jpg'

export default function Produkts(props) {
   const list_produkts = [
      {
         id: 0,
         img: lid,
         active_price: "1450p",
         old_price: "1540p",
         action: "-7%",
         description: "Композиция шаров на день рождения"
      },
      {
         id: 1,
         img: lid,
         active_price: "1450p",
         old_price: "1540p",
         action: "-7%",
         description: "Композиция шаров на день рождения"
      },
      {
         id: 2,
         img: lid,
         active_price: "1450p",
         old_price: "1540p",
         action: "-7%",
         description: "Композиция шаров на день рождения"
      },
      {
         id: 3,
         img: lid,
         active_price: "1450p",
         old_price: "1540p",
         action: "-7%",
         description: "Композиция шаров на день рождения"
      },
      {
         id: 4,
         img: lid,
         active_price: "1450p",
         old_price: "1540p",
         action: "-7%",
         description: "Композиция шаров на день рождения"
      },
      {
         id: 5,
         img: lid,
         active_price: "1450p",
         old_price: "1540p",
         action: "-7%",
         description: "Композиция шаров на день рождения"
      },
      {
         id: 6,
         img: lid,
         active_price: "1450p",
         old_price: "1540p",
         action: "-7%",
         description: "Композиция шаров на день рождения"
      },
      {
         id: 7,
         img: lid,
         active_price: "1450p",
         old_price: "1540p",
         action: "-7%",
         description: "Композиция шаров на день рождения"
      }]
   return (
      <div className="block-leaders-of-sells__list-content-block row-flex">
         {list_produkts.map((data) => 
            data.id < props.count || props.count === undefined && <Produkt data={data} key={data.id}/> 
         )}
      </div>
   )
}
