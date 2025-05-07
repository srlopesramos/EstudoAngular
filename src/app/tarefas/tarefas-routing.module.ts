import { Routes } from '@angular/router';
import {ListarTarefasComponent} from './listar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tareafas/listar'
  },
  {
    path: 'tareafas/listar',
    component: ListarTarefasComponent
  }
];
