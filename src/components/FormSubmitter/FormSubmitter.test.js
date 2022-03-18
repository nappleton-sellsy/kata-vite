import { shallowMount } from '@vue/test-utils'
import FormSubmitter from './FormSubmitter.vue'

describe('FormSubmitter.vue', () => {

    let wrapper;

    const createComponent = () => {
        wrapper = shallowMount(FormSubmitter, { /* optional parameters */ });
    }

    beforeEach(() => {
        createComponent();
    })

    afterEach(() => {
		wrapper.unmount();
	});

    it('should show a form', () => {
        expect(wrapper.find('form').exists()).toBe(true)
    })

    it('should contain a username input', () => {
        expect(wrapper.find('input[data-testid="username"]').exists()).toBe(true)
    })

    it('should not show a success message on mount', () => {
        expect(wrapper.find('[data-testid="success"]').exists()).toBe(false)
    })

    it('should show a success message when the form is submitted', async () => {
        await wrapper.find('input[data-testid="username"]').setValue('Neil')
        await wrapper.find('form').trigger('submit.prevent')

        expect(wrapper.find('[data-testid="success"]').exists()).toBe(true)
    })

    it('should show the username in the success message',  async () => {
        await wrapper.find('input[data-testid="username"]').setValue('Neil')
        await wrapper.find('form').trigger('submit.prevent')

        expect(wrapper.find('[data-testid="success"]').text()).toBe('Thanks for your submission Neil')
    })
})