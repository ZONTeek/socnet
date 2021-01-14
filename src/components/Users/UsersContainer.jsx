import Users from './Users';
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, toggleFollow, toggleFetching } from '../../redux/users-reducer';

let mapStateToProps = (state) => ({ state: state.usersPage })

export default connect(mapStateToProps, { setUsers, setCurrentPage, toggleFollow, toggleFetching })(Users);