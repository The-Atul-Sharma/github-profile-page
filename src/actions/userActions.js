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

export const searchRepos = searchValue => dispatch => {
    dispatch({
        type: 'SEARCH', 
        searchValue,
    })
    return Promise.resolve();
}

export const filterRepos = (filterType, value) => dispatch => {
    dispatch({
        type: 'FILTER', 
        filterInfo: {
            type: filterType,
            value: value,
        }
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