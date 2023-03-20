import React from 'react'

import "./style.css"

import WorkTime from '../work_time/work_time'
import ListMessagers from '../list_mess/list_messagers'
import TitleBlock from '../block_titlle/title_block'

export default function Footer() {
   return (
      <footer className="footer">
         <div className="block-footer">
            <div className="block-footer__container conteiner">
               <div className="block-footer__main-column">
                  <div className="block-footer__raw">
                     <div className="block-footer__column">
                        <TitleBlock text={'Контакты'}/>
                        <div className="block-footer__tell">
                           +7 918 346 57 47
                        </div>
                        <ListMessagers name_vis={true}/>
                     </div>
                     <div className="block-footer__column">
                        <TitleBlock text={'Адрес'} />
                        <div className="block-footer__addres">
                           Заветный <br/>
                              проезд Лазурный, д.11
                        </div>
                        <WorkTime isFooter={true}/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
