import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavoritesPage = () => {
  const { favorites } = useAppSelector(state => state.github)
  
  if (favorites.length === 0) return <p className='text-center font-bold'>No Items(</p>

  return (
    <div>
     
    </div>
  )
}

export default FavoritesPage

