import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { TarefasModule } from './tarefas'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TarefasModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gerenciador de tarefas';
}
