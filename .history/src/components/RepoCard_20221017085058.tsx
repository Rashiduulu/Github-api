import React from 'react'
import { IRepo } from '../models/models'

const RepoCard = ({repo}: {repo: IRepo}) => {
  return (
      <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover bg-gray-100 transition-all'>
          <h2 className='text-lg font-bold'>{repo.full_name}</h2>
          <p className='text-sm'>
              Forks: <span className=''></span>
          </p>
    </div>
  )
}

export default RepoCard