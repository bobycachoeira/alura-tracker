<template>
    <BoxTarefa>
        <div class="columns clicavel" @click="tarefaClicada">
            <div class="column is-4">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'Sem projeto especifico' }}
            </div>
            <div class="column is-7">
                <CronometroInicial :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxTarefa>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CronometroInicial from './CronometroInicial.vue'
import ITarefa from '../interfaces/ITarefa'
import BoxTarefa from './BoxTarefa.vue'

export default defineComponent({
    name: "TarefaApontada",
    emits: ['aoTarefaClicada'],
    components: {
        CronometroInicial,
        BoxTarefa
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    },
    methods: {
        tarefaClicada(): void {
            this.$emit('aoTarefaClicada', this.tarefa)
        }
    }
})
</script>

<style scoped>
.clicavel {
    cursor: pointer;
}
</style>