<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioTempo />
      <!-- Lista de Tarefas ???? -->
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import FormularioTempo from './components/FormularioTempo.vue'
export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTempo
  }
});
</script>

<style></style>
