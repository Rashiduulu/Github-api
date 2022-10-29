import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavoritesPage = () => {
  const { favorites } = useAppSelector(state => state.github)
  
  if (favorites.length === 0) return <h3 className='text-center font-bold'>No Items(</h3>

  return (
    <ul className='list-none'>
      {favorites.map(f => ( 
        <li key={f}>
          <a href=""></a>
       </li>
     ))}
    </ul>
  )
}

export default FavoritesPage

