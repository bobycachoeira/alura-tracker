import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasView from '../views/TarefasView.vue'


const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'TarefasView',
    component: TarefasView
}]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;