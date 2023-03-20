import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '..//Footer/Footer';


export default class Template extends Component {
   render() {
      return (
         <>
            <Header />
            <main>
               <div className="wrapper">
                  <div className="conteiner">
                     <div className="content-block">
                        <Outlet />
                     </div>
                  </div>
               </div>
            </main>
            <Footer />
         </>
      )
   }
}
