import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './layout/Content';
import Header from './layout/Header';
import { UserProvider } from './services/UserContext';

function App() {
  // const [user, setUser] = useState();

  return (
    <>
      <Router>
        <UserProvider>
          {/* <Header user={user} loggedIn={user} setUser={setUser} /> */}
          <Header />
          {/* <Content setUser={setUser} loggedIn={user} user={user} /> */}
          <Content />
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
