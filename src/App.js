import React from 'react';
import LogIn from './components/LogIn';

import { Routes, Route } from 'react-router-dom';
import { getUser } from './helper/storeUser';
import NavBar from './components/NavBar';
import Feed from './components/Feed';

function App() {
  const userExists = getUser();

  return (
    <Routes>
      <Route element={!userExists ? <LogIn /> : <NavBar />}>
        <Route path="/" element={<Feed />} />
      </Route>
    </Routes>
  );
}

export default App;
