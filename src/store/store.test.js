import { createStore } from "vuex";

// TODO - peut mieux faire
const createVuexStore = (initalState) => 
    createStore({
        state: {
            count: 0,
            ...initalState
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
        }
    })

it('should increment without passing a value', () => {
    const store = createVuexStore({ count: 20 });
    store.commit('increment')
    expect(store.state.count).toBe(21)
})

it('should increment with a value', () => {
    const store = createVuexStore({ count: 10 })
    store.commit('increment', 10)
    expect(store.state.count).toBe(20)
})

it('should return the count x2', () => {
    const store = createVuexStore({ count: 10 })
    expect(store.getters.doubleCount).toBe(20)
    expect(store.state.count).toBe(10)
})

it('should halve the count', () => {
    const store = createVuexStore({ count: 10 })
    expect(store.getters.halveCount).toBe(5)
    expect(store.state.count).toBe(10)
})