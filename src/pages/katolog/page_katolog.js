import React, { Component } from 'react'
import TitleBlock from '../../components/block_titlle/title_block'
import KatalogList from '../../components/katalog_list/katalog_list'

export default class PageKatolog extends Component {
   render() {
      return (
         <main>
            <div className="wrapper">
               <div className="block-trend-kategori">
                  <div className="block-trend-kategori__container conteiner">
                     <div className="block-trend-kategori__content-block">
                        <TitleBlock text={'Каталoги'} />
                        <KatalogList />
                     </div>
                  </div>
               </div>
            </div>
         </main>
      )
   }
}
