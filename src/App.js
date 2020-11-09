import React from 'react';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';
import Horses from './components/Horses';
import Riders from './components/Riders';
import Schedule from './components/Schedule';
import Welcome from './components/Welcome';

function App() {
  return (
    <main className="App">
      <Nav />
      <Welcome />
      <Signup />
      <Login />
      <Horses />
      <Riders />
      <Schedule />
    </main>
  );
}

export default App;
