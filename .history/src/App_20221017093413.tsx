import React from 'react';
import {Routes, Route} from 'react-router-dom'
import FavoritiesPage from './pages/';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';


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
