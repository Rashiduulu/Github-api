import { useDispatch } from 'react-redux'
import {bindActionCreator} from 
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}