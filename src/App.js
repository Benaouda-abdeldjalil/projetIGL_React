import React, { Component, Fragment }  from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Login from "./components/Login/login.js"
import  Dashboard from "./components/Dashboard.js"
import {BrowserRouter ,Route,Switch } from "react-router-dom"
import Logout from "./components/Logout.js"

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/Deconxion">
        <Logout />
      </Route>
    </Switch>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
