import { shallowMount } from '@vue/test-utils'
import Login from './Login.vue'

describe('login.vue', () => {

    let wrapper;

    const createComponent = () => {
        wrapper = shallowMount(Login, { /* optional parameters */ });
    }

    beforeEach(() => {
        createComponent();
    })

    afterEach(() => {
		wrapper.unmount();
	});

    it('should show the form element on the user output', () => {
      expect(wrapper.find("form").exists()).toBe(true)
    });

    it('should contain input fields', () => {
        expect(wrapper.findAll('form > input').length).toBeGreaterThan(0)
    })

    it('should contain at least one text input', () => {
        expect(wrapper.findAll('input[type="text"]').length).toBeGreaterThan(0)
    })

    it('should trigger event', async () => {
        await wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('submit')
    })
})