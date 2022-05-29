import { mount, VueWrapper } from '@vue/test-utils'
import Lance from '@/components/Lance.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: VueWrapper<any>

beforeEach(() => {
  wrapper = mount(Lance)
})

describe('Validar se localizou o arquivo do componente', () => {
  it('Montando componente', () => {
    const input = wrapper.find('input')
    const col = wrapper.find('.col-6')
    expect(wrapper).toBeTruthy()
    expect(input).toBeTruthy()
    expect(col).toBeTruthy()
  })
})

describe('Lance', () => {
  it('Não aceita lance com valor menor do que zero', () => {
    const input = wrapper.find('input')
    input.setValue(-100)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance')
    expect(lancesEmitidos).toBeUndefined()
  })

  it('Emite um lance quando o valor é maior do que zero', () => {
    const input = wrapper.find('input')
    input.setValue(100)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance')
    expect(lancesEmitidos).toHaveLength(1)
  })

  it('Emite o valor esperado de um lance válido', () => {
    const input = wrapper.find('input')
    input.setValue(100)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance') as [][number]
    const lance = parseInt(lancesEmitidos[0][0], 10)
    expect(lance).toBe(100)
  })
})

describe('um lance com valor mínimo', () => {
  it('Todos os lances devem possuir um valor maior do que o mínimo informado', () => {
    const newWrapper = mount(Lance, {
      propsData: {
        lanceMinimo: 300
      }
    })
    const input = newWrapper.find('input')
    input.setValue(400)
    newWrapper.trigger('submit')
    const lancesEmitidos = newWrapper.emitted('novo-lance') as [][number]
    expect(lancesEmitidos).toHaveLength(1)
    const lance = parseInt(lancesEmitidos[0][0], 10)
    expect(lance).toBe(400)
  })

  it('emite o valor esperado de um lance válido', () => {
    const newWrapper = mount(Lance, {
      propsData: {
        lanceMinimo: 300
      }
    })
    const input = newWrapper.find('input')
    input.setValue(400)
    newWrapper.trigger('submit')
    const lancesEmitidos = newWrapper.emitted('novo-lance') as [][number]
    const lance = parseInt(lancesEmitidos[0][0], 10)
    expect(lance).toBe(400)
  })

  it('Não deve inserir valores menores que o valor minimo informado', () => {
    const newWrapper = mount(Lance, {
      propsData: {
        lanceMinimo: 300
      }
    })
    const input = newWrapper.find('input')
    input.setValue(400)
    newWrapper.trigger('submit')
    input.setValue(100)
    newWrapper.trigger('submit')
    input.setValue(200)
    newWrapper.trigger('submit')
    input.setValue(50)
    newWrapper.trigger('submit')
    const lancesEmitidos = newWrapper.emitted('novo-lance') as [][number]
    expect(lancesEmitidos).toHaveLength(1)
  })
})
