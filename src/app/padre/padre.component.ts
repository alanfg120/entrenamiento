import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {


  mensajeHijo: string = ''
  constructor() { }

  ngOnInit(): void {
  }


  mostrarMensajeHijo(event: any){
    this.mensajeHijo = event;
  }
  
  valorSaveHijo(){
    console.log(this.mensajeHijo);
  }
}
