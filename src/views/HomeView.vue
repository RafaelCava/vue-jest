<template>
  <div class="home">
    <Lance />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Lance: defineAsyncComponent(() => import('@/components/Lance.vue'))
  }
})
</script>
