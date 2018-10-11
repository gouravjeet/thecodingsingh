import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My Blog
          </p>
        </header>
        {/* <Home /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
