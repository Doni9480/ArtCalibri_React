import React from 'react'

import './style.css'

import whatsapp_icon from './../../img/icon-whatsapp.svg'
import instagram_icon from './../../img/icon-instagram.svg'

export default function ListMessagers(props) {
   return (
      <div className={`block-header__mess-body${props.name_vis ? '_big' : ''}`}>
         <div className="block-header__mess-item">
            <a href="###" className="block-header__mess-link">
               <img src={instagram_icon} alt="icon-instagram" className={`block-header__icon${props.name_vis ? '_big' : ''}`} />
               {props.name_vis && <span>Instagram</span>}
            </a>
         </div>
         <div className="block-header__mess-item">
            <a href="###" className="block-header__mess-link">
               <img src={whatsapp_icon} alt="icon-whatsapp" className={`block-header__icon${props.name_vis ? '_big' : ''}`} />
               {props.name_vis && <span>WhatsApp</span>}
            </a>
         </div>
      </div>
   )
}
