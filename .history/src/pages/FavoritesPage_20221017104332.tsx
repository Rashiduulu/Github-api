import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavoritesPage = () => {
  const {favorites} = useAppSelector(state => state.github)

  return (
    <div>
     
    </div>
  )
}

export default FavoritesPage

