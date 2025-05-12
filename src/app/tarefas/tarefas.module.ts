import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {TarefaConcluidaDirective, TarefaService} from './shared';
import {ListarTarefasComponent} from './listar';
import {CadastrarTarefaComponent} from './cadastrar';
import {EditarTarefaComponent} from './editar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ListarTarefasComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  providers: [TarefaService],

})
export class TarefasModule {
}
