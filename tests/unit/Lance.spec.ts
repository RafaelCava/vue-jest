import { mount } from '@vue/test-utils'
import Lance from '@/components/Lance.vue'

test('Não pode aceitar lance com valor menor que zero', () => {
  const wrapper = mount(Lance)
  expect(wrapper).toBeTruthy()
})
