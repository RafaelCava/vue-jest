<template>
  <form @submit.prevent="darLance()">
    <div class="form-row">
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input
            type="number"
            step="1"
            class="form-control"
            v-model="valor"
            :placeholder="`Lance mínimo: R$${lanceMinimo}`"
          />
          <div class="input-group-append">
            <span class="input-group-text">.00</span>
          </div>
        </div>
      </div>
      <div class="col-6">
        <button class="btn btn-primary btn-block" type="submit">
          Dar lance!
        </button>
      </div>
      <div class="col-12" v-if="lanceInvalido">
        <p class="alert alert-danger" role="alert">
          O valor mínimo para o lance é de <strong>R$ {{ lanceMinimo }}</strong>
        </p>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LanceComponent',
  props: {
    lanceMinimo: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const valor = ref(null)
    const lanceInvalido = computed(() => {
      return valor.value != null && valor.value < props.lanceMinimo
    })
    const darLance = () => {
      if (lanceInvalido.value) {
        return
      }
      emit('novo-lance', valor.value)
      valor.value = null
    }
    return {
      valor,
      lanceInvalido,
      darLance
    }
  }
})
</script>
