import React from 'react';
import './App.css';
import PageKatolog from './pages/katolog/page_katolog';
import Main from './pages/main/Main';
import PageProdukts from './pages/produkts/page_produkts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Contacts from './pages/contacts/contacts';
import Delivery from './pages/delivery/delivery';
import Gallery from './pages/gallery/gallery';
import Reviews from './pages/reviews_page/reviews';
import ShoppingCart from './pages/shopping_cart/shopping_cart';
import Template from './components/template/template';
import ProductDetails from './pages/product_details/product_details';

class App extends React.Component {
  render() {
    // const list_nav = [{
    //   id: 0,
    //   name: 'Акции',
    //   link: '/',
    // },
    // {
    //   id: 1,
    //   name: 'Доставка',
    //   link: '/',
    // },
    // {
    //   id: 2,
    //   name: 'Контакты',
    //   link: '/',
    // },
    // {
    //   id: 3,
    //   name: 'Галерея',
    //   link: '/',
    // },
    // {
    //   id: 4,
    //   name: 'Отзывы',
    //   link: '/',
    // }]

    // const list_type_produkt = [{
    //   id: 0,
    //   name: 'Латексные шары',
    //   link: '/',
    // },
    // {
    //   id: 1,
    //   name: 'Фольгированые шары',
    //   link: '/',
    // },
    // {
    //   id: 2,
    //   name: 'Цифры',
    //   link: '/',
    // },
    // {
    //   id: 3,
    //   name: '3D Сферы',
    //   link: '/',
    // },
    // {
    //   id: 4,
    //   name: 'Хромовые шары',
    //   link: '/',
    // }]
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Template/>}>
              <Route index element={<Main />} />
              <Route path='/contakts' element={<Contacts />} />
              <Route path='/delivery' element={<Delivery />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/shopping_cart' element={<ShoppingCart />} />
              <Route path='/kategories' element={<PageKatolog />} />
              <Route path='/kategories/:products' element={<PageProdukts />} />
              <Route path='/kategories/products/:details' element={<ProductDetails />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
