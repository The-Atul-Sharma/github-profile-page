const hasKeyValue = (arr, obj) => {
    if (Object.values(obj)[0] === "All") {
        return arr;
    }

    let newArr = [];
    arr.forEach((item) => { 
        if (item.hasOwnProperty(Object.keys(obj)[0]) && item[Object.keys(obj)[0]] === Object.values(obj)[0]) {
            newArr.push(item);
        }
    });
    return newArr;
}

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
            const {searchValue} = action;
            let filterRepos = state.userRepos.filter(val => val.name.toLowerCase().includes(searchValue.toLowerCase()));
            return {...state, filterRepos};
        case 'FILTER':
            const {filterInfo} = action;
            switch (filterInfo.type) {
                case 'REPO_TYPE':
                    filterRepos = hasKeyValue(state.userRepos, filterInfo.value.filter);
                    return {...state, filterRepos};
                case 'LANGUAGE_TYPE':
                    filterRepos = hasKeyValue(state.userRepos, {'language': filterInfo.value.title});
                    return {...state, filterRepos};
                default:
                    return state;
            }
        default:
            return state;
    }
};