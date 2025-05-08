import { Component, OnInit } from '@angular/core';
import {TarefaService, Tarefa} from '../shared';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-listar-tarefas',
    imports: [
        RouterLink
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

}
