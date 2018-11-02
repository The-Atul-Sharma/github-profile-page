import api from '../services/api';

export const searchRepos = value => {
    return {
        type: 'SEARCH', 
        value,
    }
}

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

export const getUserInformation = username => dispatch =>
    api.user.userInformation(username).then(res => {
        dispatch(userInformation(res));
    });

export const getUserRepos = username => dispatch =>
    api.user.userRepos(username).then(res => {
        dispatch(userRepos(res));
    });