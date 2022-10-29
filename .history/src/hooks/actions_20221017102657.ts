import { useDispatch } from 'react-redux'
import bind
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}