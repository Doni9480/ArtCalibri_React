import React, { Component } from 'react'
import KatalogCard from '../Katolog_card/katolog_card'

import './style.css'

export default class KatalogList extends Component {
   render() {
      return (
         <div className="block-trend-kategori__list-kategori">
            {
               this.props.list_katolog.map(data => 
                  <KatalogCard domain={this.props.domain} data={data} key={data.id}/>
                  )
            }  
         </div>
      )
   }
}
