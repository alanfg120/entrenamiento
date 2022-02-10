import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Nuevo titulo';
  parrafo = ' esto es un parrafo '

  cambiarParrafo(): void {
    this.parrafo = 'Nuevo parrafo'
  }


  


}
