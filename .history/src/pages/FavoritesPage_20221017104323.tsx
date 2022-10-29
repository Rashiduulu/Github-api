import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavoritesPage = () => {
  const {faovites} = useAppSelector(state => state.github)

  return (
    <div>
     
    </div>
  )
}

export default FavoritesPage

