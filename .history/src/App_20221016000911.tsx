import React from 'react';
import {Routes, Route} from 'react-router-dom'
import FavoritiesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import 


function App() {
  return (
    <>
     <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/favorite' element={<FavoritiesPage/>}/>
    </Routes>
    </>
  );
}

export default App;
