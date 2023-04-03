import React from 'react';
import {Link, useMatch} from 'react-router-dom';
import './style.css';

export default function TitleBlock(props) {
   const isMain = useMatch('/');
   props.isPageTitle ? (document.title = props.text) : isMain && (document.title = 'Главная')
   return (
      <div className="title-block">
         <h2 className="title-block__title title">{props.text}</h2>
         {props.link && <Link to={props.link} className="title-block__link-all get-all-item"><span>смотреть всё</span></Link>}
      </div>
   )
}
