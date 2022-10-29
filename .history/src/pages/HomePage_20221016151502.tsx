import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery('nurtilek')
  console.log(data)
  return (
    <div className='flex'>{ isError && <p className='text-center text-red-600'>Something went wrong...</p> }</div>
  )
}

export default HomePage