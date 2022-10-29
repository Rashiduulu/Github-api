import React from 'react';
import {Routes, Route} from 'react-router-dom'
import FavoritiesPage from './pages/FavoritiesPage';
import HomePage from './pages/HomePage';



function App() {
  return (
    <Routes>
      <Route path='/' exact element={HomePage}>
     
</Route>
    </Routes>
  );
}

export default App;
