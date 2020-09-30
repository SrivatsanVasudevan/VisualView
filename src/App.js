import React from 'react';
import './App.css';
import FizzBuzz from './interview-questions/fizzbuzz/fizzbuzz-component';
import Header from './components/header/header-component';
import Footer from './components/footer/footer-component';
import HomePage from './components/homepage/homepage-component';
import {Route,Switch} from 'react-router-dom';
import Search from './interview-questions/search/search-component';
import Kadane from './interview-questions/kadane/kadane-component';
import Error from './components/error/error-component';

function App() {
  return (
    <div className="App">
      
      <Header />
      {<Switch>
        <Route path = "/" exact component = {HomePage} /> 
        <Route path = "/fizzbuzz" exact component = {FizzBuzz} /> 
        <Route path = "/binarysearch" exact component = {Search} />
        <Route path = "/kadane" exact component = {Kadane} />
        <Route component = {Error} />
      </Switch>}
      {
        
      }   
      {<Footer />
      }
      
      
      
      
    </div>
  );
}

export default App;
