<template>
    <FormularioTempo @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <TarefaApontada v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"
            @ao-tarefa-clicada="selecionarTarefa" />
        <BoxTarefa v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </BoxTarefa>

        <div class="modal" :class="{ 'is-active': tarefaSelecionada }" v-if="tarefaSelecionada">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Editando tarefa</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <label for="descricaoDaTarefa" class="label">
                            Descrição
                        </label>
                        <input type="text" class="input" v-model="tarefaSelecionada.descricao" id="descricaoTarefa">
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button @click="alterarTarefa" class="button is-success">Salvar</button>
                    <button @click="fecharModal" class="button">Cancelar</button>
                </footer>
            </div>
        </div>


    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
import FormularioTempo from '../components/FormularioTempo.vue'
import TarefaApontada from '../components/TarefaApontada.vue'
import BoxTarefa from '../components/BoxTarefa.vue'
import { useStore } from '@/store';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
import ITarefa from '@/interfaces/ITarefa';


export default defineComponent({
    name: 'TarefasView',
    components: {
        FormularioTempo,
        TarefaApontada,
        BoxTarefa
    },
    data() {
        return { tarefaSelecionada: null as ITarefa | null }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.store.dispatch(CADASTRAR_TAREFA, tarefa)
        },
        selecionarTarefa(tarefa: ITarefa) {
            this.tarefaSelecionada = tarefa
        },
        fecharModal() {
            this.tarefaSelecionada = null
        },
        alterarTarefa() {
            this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
                .then(() => this.fecharModal())
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return false
            // return this.tarefas.length === 0
        }
    },
    setup() {
        const store = useStore()
        store.dispatch(OBTER_TAREFAS)
        store.dispatch(OBTER_PROJETOS)
        return {
            tarefas: computed(() => store.state.tarefa.tarefas),
            store
        }
    }
});
</script>