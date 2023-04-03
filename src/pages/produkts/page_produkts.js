import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import TitleBlock from '../../components/block_titlle/title_block'
import SortForm from '../../components/filters/sort_form'
import Produkts from '../../components/produkts/produkts'

export default function PageProdukts() {
   const { products, } = useParams();
   let [products_list, setProductsList] = useState({});
   const [isFinished, setIsFinished] = useState(false)
   const domain = 'http://localhost:8000'

   useEffect(() => {

      axios
         .get(`${domain}/api/v1/category/${products}?title=true`)
         .then((data) => {
            setProductsList(data.data);
            setIsFinished(true);
         });
   }, [products]);

   return (
      <>
         <TitleBlock text={'Готовые композиции'} isPageTitle={true} />
         <SortForm />
         <Produkts domain={domain} products_list={products_list} />
      </>
   )
}
