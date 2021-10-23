import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMSEncuestas';
  author = 'José Antonio Murillo García';
  current_Year = new Date().getFullYear();
  modules = [
    {
      name: 'Encuestas', url: 'encuestas',
      children: [
        { name: 'GetAll', url: 'getall' },
        { name: 'Add', url: 'add' },
      ]
    },
    {
      name: 'Plantillas', url: 'plantillas',
      children: [
        { name: 'GetAll', url: 'getall' },
        { name: 'Add', url: 'add' },
      ]
    },
    {
      name: 'Reportes', url: 'reportes',
      children: [
        { name: 'Get', url: 'get' },
      ]
    }
  ]
}
