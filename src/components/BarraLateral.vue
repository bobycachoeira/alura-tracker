<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <button class="button" @click="alterarTema">
            {{textoBotao}}
        </button>
        <div class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class="fas fa-tasks"> Tarefas</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link">
                        <i class="fas fa-project-diagram"> Projetos</i>
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    props: {
        modoEscuro: {
            type: Boolean,
        }
    },
    computed: {
        textoBotao (){           
            if (this.modoEscuro) {
                return 'Desativar Modo Escuro'
            }
            return 'Ativar Modo Escuro'
        }
    },
    methods: {
        alterarTema() {
            this.$emit('trocar-tema')
        }
    }
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA
}
.link.router-link-active {
    color: #FAF0CA;
}
</style>