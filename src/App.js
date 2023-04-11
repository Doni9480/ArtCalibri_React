import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

import Template from './components/template/template';
import Main from './pages/main/Main';
import PageKatolog from './pages/katolog/page_katolog';
import PageProdukts from './pages/produkts/page_produkts';
import Contacts from './pages/contacts/contacts';
import Delivery from './pages/delivery/delivery';
import Gallery from './pages/gallery/gallery';
import Reviews from './pages/reviews_page/reviews';
import ShoppingCart from './pages/shopping_cart/shopping_cart';
import ProductDetails from './pages/product_details/product_details';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
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
        </Router>
      </div>
    );
  }
}

export default App;
