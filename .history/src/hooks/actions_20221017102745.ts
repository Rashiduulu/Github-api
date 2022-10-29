import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

const 

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}