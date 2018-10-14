import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import Blog from './components/blogs/Blog';

// import { Router } from 'react-router'
// import createBrowserHistory from 'history/createBrowserHistory'
// import { BrowserRouter as Router} from 'react-router-dom';

// const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <header className="App-header">
          <Router>
            <Route exact={true} path="/" component={Home} />
          </Router>
          <Router>
            <Route path="/about" component={About} />
          </Router>
          <Router>
            <Route path="/blogs" component={Blog} />
          </Router>
        </header>
        <Footer />

      </div>
    );
  }
}

export default App;
