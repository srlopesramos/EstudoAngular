import { Component, OnInit } from '@angular/core';
import {TarefaService, Tarefa, TarefaConcluidaDirective} from '../shared';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-listar-tarefas',
  imports: [
    RouterLink,
    TarefaConcluidaDirective
  ],
  templateUrl: './listar-tarefas.component.html',
  styleUrl: './listar-tarefas.component.scss'
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa):void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "'+ tarefa.nome +'"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alertarStatus(tarefa: Tarefa):void {
    if(confirm('Deseja alterar o status da tarefa "'+ tarefa.nome +'"?')){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
