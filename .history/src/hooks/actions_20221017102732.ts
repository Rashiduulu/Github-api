import { useDispatch } from 'react-redux'
import {bind} from '@reduxjs/toolkit'
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}