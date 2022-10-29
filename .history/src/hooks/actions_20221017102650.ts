import { useDispatch } from 'react-redux'
imprt
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}