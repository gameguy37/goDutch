import { getUsers, getUser } from '../util/users';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch => {
    return getUsers().then( users => dispatch(receiveUsers(users)));
};

export const fetchUser = (id) => dispatch => {
    return getUser(id).then( user => dispatch(receiveUser(user)));
};