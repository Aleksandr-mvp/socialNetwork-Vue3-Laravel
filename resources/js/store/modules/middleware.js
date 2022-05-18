
const state = {
    user: {
        loggedIn: true,
        isSubscribed: false,
        token: !localStorage.getItem('token' || '')
    },

}

const mutations = {

}

const actions = {

}

const getters = {
    auth(state) {
        return state.user
    },
}

export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
}
