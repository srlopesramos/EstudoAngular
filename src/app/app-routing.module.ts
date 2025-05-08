import {Routes} from '@angular/router';
import {CadastrarTarefaComponent, ListarTarefasComponent} from './tarefas';

export const routes: Routes = [
  {path: '', redirectTo: '/tarefas/listar', pathMatch: 'full'},
  {path: 'tarefas', redirectTo: 'tarefas/listar'},
  {path: 'tarefas/listar', component: ListarTarefasComponent},
  {path: 'tarefas/cadastrar', component: CadastrarTarefaComponent}
];
