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
                filterRepos: action.userRepos,
            };
        case 'SEARCH':
                const {value} = action;
                const filterRepos = state.userRepos.filter(val => val.name.toLowerCase().includes(value.toLowerCase()));
                return {...state, filterRepos};
        default:
            return state;
    }
};