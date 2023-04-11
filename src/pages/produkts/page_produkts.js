import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import TitleBlock from '../../components/block_titlle/title_block'
import SortForm from '../../components/filters/sort_form'
import Produkts from '../../components/produkts/produkts'

export default function PageProdukts() {
   const { products, } = useParams();
   let [products_list, setProductsList] = useState([]);
   const domain = 'http://localhost:8000'

   const get_url = async (param) => {
      let url;
      let title;
      if (param === 'lid_sale') {
         url = `${domain}/api/v1/order/?get_lid_sale=true`;
         title = 'Лидеры продаж'
      } else if (param === 'actions') {
         url = `${domain}/api/v1/products/?get_action=true`;
         title = 'Все акции'
      } else {
         url = `${domain}/api/v1/category/${param}`
      }
      const response = await axios.get(url);
      let res = response.data
      res.name = title;
      setProductsList(res);
   }

   useEffect(() => {
      get_url(products);
   }, [products]);

   return (
      <>
         <TitleBlock text={products_list.name} isPageTitle={true} />
         <SortForm />
         <Produkts domain={domain} products_list={products_list.products ? products_list.products : products_list.results ? products_list.results : [] } />
      </>
   )
}
