import React from 'react';
import LogIn from './components/LogIn';

import { Routes, Route } from 'react-router-dom';
import { getUser } from './helper/storeUser';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  const userExists = getUser();

  return (
    <Routes>
      <Route element={!userExists ? <LogIn /> : <NavBar />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
