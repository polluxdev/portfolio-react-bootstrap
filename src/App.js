import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/pages/Main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar>
        <Link to='/home'>Home</Link>&nbsp;&nbsp;
        <Link to='/profile'>Profile</Link>&nbsp;&nbsp;
        <Link to='/contact'>Contact</Link>&nbsp;&nbsp;
        <Link to='/portofolio'>Portofolio</Link>&nbsp;&nbsp;
      </NavBar>
      <Main/>
    </div>
  );
}

export default App;
