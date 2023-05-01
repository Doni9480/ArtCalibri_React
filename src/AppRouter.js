import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Template = React.lazy(() => import('./components/template/template'));
const Main = React.lazy(() => import('./pages/main/Main'));
const PageKatolog = React.lazy(() => import('./pages/katolog/page_katolog'));
const PageProdukts = React.lazy(() => import('./pages/produkts/page_produkts'));
const Contacts = React.lazy(() => import('./pages/contacts/contacts'));
const Delivery = React.lazy(() => import('./pages/delivery/delivery'));
const Gallery = React.lazy(() => import('./pages/gallery/gallery'));
const Reviews = React.lazy(() => import('./pages/reviews_page/reviews'));
const ShoppingCart = React.lazy(() => import('./pages/shopping_cart/shopping_cart'));
const ProductDetails = React.lazy(() => import('./pages/product_details/product_details'));


export default function AppRouter() {
   return (
      <Suspense fallback={<div className='block-loading'><div className='block-loading__item'>Loading ...</div></div>}>
         <Routes>
            <Route path='/' element={<Template />}>
               <Route index element={<Main />} />
               <Route path='/contakts' element={<Contacts />} />
               <Route path='/delivery' element={<Delivery />} />
               <Route path='/gallery' element={<Gallery />} />
               <Route path='/reviews' element={<Reviews />} />
               <Route path='/shopping_cart' element={<ShoppingCart />} />
               <Route path='/kategories' element={<PageKatolog />} />
               <Route path='/kategories/:products' element={<PageProdukts />} />
               <Route path='/kategories/:products/:details' element={<ProductDetails />} />
            </Route>
         </Routes>
      </Suspense>
   )
}
