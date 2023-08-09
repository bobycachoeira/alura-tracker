<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @trocar-tema="trocarTema" :modo-escuro="modoEscuroAtivo"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <NotificacoesApp />
      <RouterView />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import NotificacoesApp from './components/NotificacoesApp.vue'
export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    NotificacoesApp
  },
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
    trocarTema (){
      this.modoEscuroAtivo = !this.modoEscuroAtivo
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #9f9a9a;
}
.conteudo {
  background: var(--bg-primario);
}
</style>
