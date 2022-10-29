import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavoritesPage = () => {
  const { favorites } = useAppSelector(state => state.github)
  
  if (favorites.length === 0) return

  return (
    <div>
     
    </div>
  )
}

export default FavoritesPage

