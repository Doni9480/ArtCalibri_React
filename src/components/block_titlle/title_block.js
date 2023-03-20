import React from 'react'
import './style.css'

export default function TitleBlock(props) {
   return (
      <div className="title-block">
         <h2 className="title-block__title title">{props.text}</h2>
         {props.link && <a href="/kategories.html" className="title-block__link-all get-all-item"><span>смотреть всё</span></a>}
      </div>
   )
}
