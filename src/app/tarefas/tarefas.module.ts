import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TarefaService} from './shared';
import { ListarTarefasComponent } from './listar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListarTarefasComponent,
    FormsModule,
    RouterModule
  ],
  providers: [TarefaService],

})
export class TarefasModule { }
