import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './layout/Content';
import Header from './layout/Header';

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <Router>
        <Header user={user} loggedIn={user} setUser={setUser} />
        <Content setUser={setUser} loggedIn={user} user={user} />
      </Router>
    </>
  );
}

export default App;
