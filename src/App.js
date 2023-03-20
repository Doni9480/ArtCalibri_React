import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageKatolog from './pages/katolog/page_katolog';
import Main from './pages/main/Main';
import PageProdukts from './pages/produkts/page_produkts';

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
        <Header />
        {/* <Main/> */}
        {/* <PageKatolog/> */}
        <PageProdukts/>
        <Footer/>
      </div>
    );
  }
}

export default App;
