import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import {CalculadoraModule}  from './calculadora';

@Component({
  selector: 'app-root',
  imports: [CalculadoraModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadora';
}
