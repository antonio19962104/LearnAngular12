import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearningAngular12';
  author = 'José Antonio Murillo Garcia'
  current_year = new Date().getFullYear();
  modules = ['Encuestas', 'Plantillas', 'Base de Datos', 'Reportes', 'Usuarios']
}
