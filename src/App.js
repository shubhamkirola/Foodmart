import React from 'react';
import Header from './Components/Header';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
    <Provider store={appStore}>
    <div className='app m-0 p-0 box-border'>

    <Header/>
    <Outlet/>
    <Footer/>

    </div>
    </Provider>
    </>
  )
}



export default App;
