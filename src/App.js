import React, { Component, Fragment }  from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'antd';


import Login from "./components/Login/login.js"
import {BrowserRouter } from "react-router-dom"
import HomeAdmis from "./components/Admistration/HomeAdmis.js"
import HomeEtud from "./components/Etudiant/HomeEtud.js"
import HomeEnsei from "./components/Enseignantes/HomeEnsei.js"


function App() {
  return (
    <BrowserRouter>
    
    <HomeAdmis />
    
    </BrowserRouter>

  
    
 
  )
}

export default App;
