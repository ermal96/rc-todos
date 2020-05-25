import  {useEffect} from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'

const Logout = ({logout}) => {
    useEffect(() => {
        logout();
    }, [logout])

    return null
}

export default connect(null, {logout})(Logout)
