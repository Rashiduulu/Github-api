import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

const HomePage = () => {
  const {isLoading, isError, data} = useSearchUsersQuery('Nurtilek')
  return (
    <div>HomePage</div>
  )
}

export default HomePage