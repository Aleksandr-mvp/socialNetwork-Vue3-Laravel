
const state = {
    user: {
        loggedIn: false,
        isSubscribed: false,
    },
    token: localStorage.getItem('token' || '')
}

const mutations = {

}

const actions = {

}

const getters = {
    auth(state) {
        return state.user
    },
    loggedIn(state) {
        return state.token == null
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
