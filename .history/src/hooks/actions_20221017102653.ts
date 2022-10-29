import { useDispatch } from 'react-redux'
import 
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}