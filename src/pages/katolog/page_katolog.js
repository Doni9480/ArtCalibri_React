import React, { Component } from 'react'
import TitleBlock from '../../components/block_titlle/title_block'
import KatalogList from '../../components/katalog_list/katalog_list'
import axios from 'axios'

export default class PageKatolog extends Component {
   constructor(props) {
      super(props)
      this.state = {
         list_katolog: []
      }
      this.domain = 'https://artcalibridrfbackend-production.up.railway.app'
   }
   componentDidMount() {
      let data_res;
         axios.get(`${this.domain}/api/v1/category/`)
         .then((data) => {
            data_res = data.data;
            console.log(data_res.results);
            this.setState({
               list_katolog: data_res.results
            })
         })
      
   }
   render() {
      return (
         <>
            <TitleBlock text={'Каталoги'} isPageTitle={true}/>
            <div className='row-navigator'>
               <div className='row-navigator__body'>
                  
               </div>
            </div>
            <KatalogList domain={this.domain} list_katolog={this.state.list_katolog} />
         </>
      )
   }
}
