export default (state = { userInfo: {}, userRepos: [], filterRepos: [] }, action = {}) => {
    switch (action.type) {
        case 'USER_INFROMATION':
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case 'USER_REPOS':
            return {
                ...state,
                userRepos: action.userRepos,
            };
        case 'SEARCH': {
                const {value} = action;
                const filterRepos = state.userRepos.filter(val => val.name.includes(value));
                return {...state, value, filterRepos};
              }
        default:
            return state;
    }
};