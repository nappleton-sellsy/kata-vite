import { shallowMount } from '@vue/test-utils'
import Neil from './Neil.vue'
import basicStore from '../../store/store'
import { createStore } from 'vuex'

// TODO Peut mieux faire
const createVuexStore = () => {
    return createStore({
        state() {
            return {
                count: 0
            }
        }
    })
}

describe('login.vue', () => {

    let wrapper;

    const createComponent = () => {
        const store = createVuexStore()
        wrapper = shallowMount(Neil, { 
            global: {
               plugins: [store]
            },
         });
    }

    beforeEach(() => {
        createComponent();
    })

    afterEach(() => {
		wrapper.unmount();
	});

    it('should show a H1', () => {
        expect(wrapper.find('h1').text()).toEqual('Hello bitch 0')
    });
})