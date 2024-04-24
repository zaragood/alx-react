
import React from 'react';
import './App.css';
import Footer from './Footer/Footer.js';
import Login from './Login/Login.js' ;
import Header from './Header/Header.js';
import Notifications from './Notifications.js';


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