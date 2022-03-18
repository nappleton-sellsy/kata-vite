import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import basicStore from '../../store/store'

describe('HelloWorld', () => {
  let wrapper;

  const createComponent = (msg = '') => {
    wrapper = shallowMount(HelloWorld, {
      global: {
        mocks: {
          $store: basicStore,
        }
      },
      props: {
        msg
      }
    });
  }

  afterEach(() => {
		wrapper.unmount();
	});


  it('should display header text', () => {
    const msg = 'Hello Vue 3'
    createComponent(msg)

    expect(wrapper.find('h1').text()).toEqual(msg)
  })

  // it('should display the correct count', async () => {
  //   createComponent()
  //   const button = wrapper.find('button')
  //   const counter = wrapper.find('[data-testid="counter"]')

  //   expect(counter.text()).toBe('Count is 0')

  //   await button.trigger('click')

  //   expect(counter.text()).toBe('Count is 1')

  // })
})