import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default function TitleBlock(props) {
   return (
      <div className="title-block">
         <h2 className="title-block__title title">{props.text}</h2>
         {props.link && <Link to={props.link} className="title-block__link-all get-all-item"><span>смотреть всё</span></Link>}
      </div>
   )
}
