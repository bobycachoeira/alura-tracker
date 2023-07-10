<template>
    <FormularioTempo @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <TarefaApontada v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxTarefa v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </BoxTarefa>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTempo from '../components/FormularioTempo.vue'
import TarefaApontada from '../components/TarefaApontada.vue'
import ITarefa from '../interfaces/ITarefa'
import BoxTarefa from '../components/BoxTarefa.vue'
export default defineComponent({
    name: 'TarefasView',
    components: {
        FormularioTempo,
        TarefaApontada,
        BoxTarefa
    },
    data() {
        return {
            tarefas: [] as ITarefa[]
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        }
    }
});
</script>