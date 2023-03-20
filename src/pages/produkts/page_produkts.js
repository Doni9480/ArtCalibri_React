import React, { Component } from 'react'
import TitleBlock from '../../components/block_titlle/title_block'
import SortForm from '../../components/filters/sort_form'
import Produkts from '../../components/produkts/produkts'

export default class PageProdukts extends Component {
   render() {
      return (
         <main>
            <div className="wrapper">
               <div className="block-trend-kategori">
                  <div className="block-trend-kategori__container conteiner">
                     <div className="block-trend-kategori__content-block">
                        <TitleBlock text={'Готовые композиции'} />
                        <SortForm/>
                        <Produkts/>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      )
   }
}