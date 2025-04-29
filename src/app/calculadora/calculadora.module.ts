import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import {CalculadoraService} from './services';


@NgModule({
  imports: [
    CommonModule,
    CalculadoraComponent
  ],
  declarations: [],
  exports: [CalculadoraComponent],
  providers:[CalculadoraService]
})
export class CalculadoraModule { }
