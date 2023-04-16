import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TitleBlock from '../../components/block_titlle/title_block';
import axios from 'axios';
import './style.css'


export default class Gallery extends Component {
   constructor(props) {
      super(props)
      this.state = {
         list_images: []
      }
   }

   componentDidMount() {
      let data_res;
      axios.get('http://localhost:8000/api/v1/gallery/')
         .then((data) => {
            data_res = data.data;
            this.setState({
               list_images: data_res.results
            })
            console.log(data.data)
         })
   }

   render() {
      return (
         <>
            <TitleBlock text={'Галерея'} isPageTitle={true}/>
            <div className='gallery-img-list'>
               {
                  this.state.list_images.map((data) =>
                     <div className='gallery-img-list__item' key={data.id}>
                        <NavLink to={`/kategories/${data.cat_slug}/${data.product}`} className='gallery-img-list__link'>
                           <img className='gallery-img-list__img' src={data.photo} alt='gallery-ph' />
                        </NavLink>
                     </div>
                  )
               }
            </div>
         </>
      )
   }
}
