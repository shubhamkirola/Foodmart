import React from 'react';
import Header from './Components/Header';
import './App.css';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <>
    <div className='app m-0 p-0 box-border'>

    <Header/>
    <Outlet/>

    </div>
    </>
  )
}



export default App;
