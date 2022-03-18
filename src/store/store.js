import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        },
        halveCount(state) {
            return state.count / 2
        }
    },
    mutations: {
        increment(state, value = 1) {
            state.count += value
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    }
})

export default store;