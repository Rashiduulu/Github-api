import React from 'react';
import {Routes, Route} from 'react-router-dom'
import FavoritiesPage from './pages/FavoritiesPage';
import HomePage from './pages/HomePage';



function App() {
  return (
    <Routes>
      <Route path='/' exelement={HomePage}>
      <Route path='/favorite' element={FavoritiesPage}>
</Route>
    </Routes>
  );
}

export default App;
