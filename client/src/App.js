import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <Footer/>
   </>

  );
};

export default App;
