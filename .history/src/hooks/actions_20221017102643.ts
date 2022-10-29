import { useDispatch } from 'react-redux'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions)
}