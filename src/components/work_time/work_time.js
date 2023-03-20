import React from 'react'

import './style.css'

export default function WorkTime(props) {
   return (
      <div className="time-work">
         <div className={props.isFooter ? "time-work__title-text_footer" : "time-work__title-text"}>Режим работы</div>
         <div className={props.isFooter ? "time-work__status-work_footer" : "time-work__status-work"}>Круглосуточно</div>
      </div>
   )
}
