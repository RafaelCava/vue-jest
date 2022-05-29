<template>
  <div class="card bg-light mb-3">
    <div class="card-header">
      Estamos leiloando um(a): <strong>{{ leilao.produto }}</strong>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        Lance inicial: <strong>R$ {{ leilao.lanceInicial }}</strong>
      </h5>
      <p class="card-text">{{ leilao.descricao }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LeilaoComponent',
  props: {
    leilao: {
      type: Object,
      required: true
    }
  }
})
</script>
