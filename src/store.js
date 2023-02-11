export default {
    state: {
        theme: 'light',
    },
    getters: {
        getTheme(state) {
            return state.theme
        }
    },
    mutations: {
        updateTheme(state, payload) {
            state.theme = payload
        }
    }
}