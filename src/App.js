import './App.css';
import React from 'react';
import { useState } from 'react';
import Projects from './projects';
import Login from './login';
import Contaceme from './contactme';
import Navbar from './navbar';
import Expreance from './expreance';
import Aboutme from './aboutme';

function App() {
 

  return (
  <div>
    <div>
    <Navbar></Navbar>
    <Projects></Projects>
<Expreance></Expreance>
<Aboutme></Aboutme>
     <Contaceme></Contaceme>
    </div>
</div>  
  );
}

export default App;
