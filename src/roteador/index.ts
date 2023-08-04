import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasView from '../views/TarefasView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import FormularioProjetos from '../views/Projetos/FormularioProjetos.vue'
import ListaProjetos from '../views/Projetos/ListaProjetos.vue'


const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'TarefasView',
        component: TarefasView
    },
    {
        path: '/projetos',
        // name: 'ProjetosView',
        component: ProjetosView,
        children: [
            {
                path: '',
                name: 'ProjetosView',
                component: ListaProjetos
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: FormularioProjetos
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: FormularioProjetos,
                props: true
            }
        ]
    }
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;