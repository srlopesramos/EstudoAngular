import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ListarTarefasComponent} from './tarefas'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
   {
     path: 'tarefas',
     redirectTo: 'tareafas/listar'
   },
   {
     path: 'tareafas/listar',
     component: ListarTarefasComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

