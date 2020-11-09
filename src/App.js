import React from 'react';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';
import Horses from './components/Horses';

function App() {
  return (
    <main className="App">
      <Nav />
      <Signup />
      <Login />
      <Horses />
    </main>
  );
}

export default App;
