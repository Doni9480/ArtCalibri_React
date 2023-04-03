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
   }
   componentDidMount() {
      let data_res;
      axios.get('http://127.0.0.1:8000/api/v1/category/')
         .then((data) => {
            data_res = data.data;
            this.setState({
               list_katolog: data_res
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
            <KatalogList list_katolog={this.state.list_katolog} />
         </>
      )
   }
}
