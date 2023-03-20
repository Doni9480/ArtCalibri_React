import React, { Component } from 'react'
import TitleBlock from '../../components/block_titlle/title_block'
import SortForm from '../../components/filters/sort_form'
import Produkts from '../../components/produkts/produkts'

export default class PageProdukts extends Component {
   render() {
      return (
         <>
            <TitleBlock text={'Готовые композиции'} />
            <SortForm />
            <Produkts />
         </>
      )
   }
}
