import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService} from './shared';
import { ListarTarefasComponent } from './listar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListarTarefasComponent
  ],
  providers: [TarefaService],

})
export class TarefasModule { }
