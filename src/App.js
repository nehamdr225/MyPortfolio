import React, { Component } from 'react';
import './App.css';
import Home from './Container/Home';
import Header from './Components/Header';
import Hero from './Components/Hero';

function App(){
  return(
    <div className ="App">
      <Header/>
      <Hero/>
      <Home/>
    </div>
  )
}
export default App;
