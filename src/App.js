import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/pages/Main';
import {Link} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavBar>
        <Link to='/profile'>Profile</Link>&nbsp;&nbsp;
        <Link to='/contact'>Contact</Link>&nbsp;&nbsp;
        <Link to='/portofolio'>Portofolio</Link>&nbsp;&nbsp;
      </NavBar>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}


export default App;
