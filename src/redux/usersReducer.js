const TOGGLE_FOLLOW = 'TOGGLE FOLLOW'
const SET_USERS = 'SET USERS';

const initialState = {
    users: []
};

export const toggleFollowAC = (userID) => {
    return {type: TOGGLE_FOLLOW, userID: userID}
};

export const setUsersAC = (users) => {
    return {type: SET_USERS, users: users}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return (
                {
                    ...state,
                    users: state.users.map((user) => {
                        if (user.id === action.userID) {
                            return {...user, isFollowed: !user.isFollowed}
                        }
                        return user
                    })
                }
            )
        }
        case SET_USERS: {
            return (
                {
                    ...state,
                    users: [...state.users, ...action.users]
                }
            )
        }
        default:
            return state;
    }
}
export default usersReducer;