export default {
    state: {
        theme: 'light',
        loquesea: true
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