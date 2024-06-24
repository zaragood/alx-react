
import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Login from './Login/Login' ;
import Header from './Header/Header';
import Notifications from './Notifications';


function App() {
  return (
    <>
    <Notifications/>
    <div className="App">
      <Header/>
      <hr></hr>
      <div className='App-body'>
        <Login/>
      </div>
      <hr></hr>
      <div className='App-footer'>
        <Footer/>
      </div>
    </div>
    </>
    
  );
}

export default App;