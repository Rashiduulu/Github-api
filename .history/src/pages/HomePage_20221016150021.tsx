import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery('rashid')
  console.log(data)
  return (
    <div>HomePage</div>
  )
}

export default HomePage