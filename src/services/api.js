import axios from 'axios';

export default {
    // Get user information
    user: {
        userInformation: username => {
            return axios
                .get('https://api.github.com/users/' + username)
                .then(res => res.data)
                .catch(err => alert(err));
        },
        // Get user repos
        userRepos: username => {
            return axios
                .get('https://api.github.com/users/' + username + '/repos')
                .then(res => res.data)
                .catch(err => alert(err));
        },
    },
};