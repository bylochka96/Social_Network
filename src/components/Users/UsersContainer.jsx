import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, toggleFollowAC} from "../../redux/usersReducer";

let mapStateToProps = (store) => {
    return {
        users: store.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        }
    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;