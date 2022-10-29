import { useDispatch } from 'react-redux'
import {bindActionCreator}
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}