import React from 'react';
import LogIn from './components/LogIn';

import { Routes, Route } from 'react-router-dom';
import { getUser } from './helper/storeUser';

function App() {
  const userExists = getUser();

  return (
    <Routes>
      <Route
        path="/"
        element={!userExists ? <LogIn /> : <div>asdasd</div>}
      ></Route>
    </Routes>
  );
}

export default App;
