import React, { Component } from 'react'
import TitleBlock from '../../components/block_titlle/title_block'
import KatalogList from '../../components/katalog_list/katalog_list'

export default class PageKatolog extends Component {
   render() {
      return (
         <>
            <TitleBlock text={'Каталoги'} />
            <KatalogList />
         </>
      )
   }
}
