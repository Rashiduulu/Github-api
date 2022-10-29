import { useDispatch } from 'react-redux'
import bindAction
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}