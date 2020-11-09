import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from './pages/Home';
import Riders from './pages/Riders';
import Horses from './pages/Horses';
import Schedule from './pages/Schedule';
import Footer from './components/Footer';
import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/horses" exact component={Horses} />
          <Route path="/riders" exact component={Riders} />
          <Route path="/schedule" exact component={Schedule} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
