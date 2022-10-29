import { useDispatch } from 'react-redux'
import bindAc
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}