import api from '../services/api';

export function userInformation(userInfo) {
    return {
        type: 'USER_INFROMATION',
        userInfo,
    };
}

export function userRepos(userRepos) {
    return {
        type: 'USER_REPOS',
        userRepos,
    };
}

export const searchRepos = value => dispatch => {
    dispatch({
        type: 'SEARCH', 
        value,
    })
    return Promise.resolve();
}

export const getUserInformation = username => dispatch =>
    api.user.userInformation(username).then(res => {
        dispatch(userInformation(res));
    });

export const getUserRepos = username => dispatch =>
    api.user.userRepos(username).then(res => {
        dispatch(userRepos(res));
    });