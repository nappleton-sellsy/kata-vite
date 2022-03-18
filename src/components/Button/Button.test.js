import { shallowMount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {

    let wrapper;

    const createComponent = () => {
        wrapper = shallowMount(Button, { /* optional parameters */ });
    }

    beforeEach(() => {
        createComponent();
    })

    afterEach(() => {
		wrapper.unmount();
	});

    it('should show the initial text', () => {
        expect(wrapper.find('[data-testid="welcome"]').exists()).toBe(true)
    });

    it('should show a button', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    });

    it('should not show the success message on load', () => {
        expect(wrapper.find('[data-testid="success"]').exists()).toBe(false)
    })

    it('should show the success message and hide the welcome message when the button has been clicked', async () => {
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('[data-testid="success"]').exists()).toBe(true)
        expect(wrapper.find('[data-testid="welcome"]').exists()).toBe(false)
    });

});