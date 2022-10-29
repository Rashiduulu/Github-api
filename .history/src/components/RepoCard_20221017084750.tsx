import React from 'react'
import { IRepo } from '../models/models'

const RepoCard = ({repo}: {repo: IRepo}) => {
  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md'>RepoCard</div>
  )
}

export default RepoCard