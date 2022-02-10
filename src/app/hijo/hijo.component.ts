import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Output() sendMensaje = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

  }
 
  enviarMensaje(){
    this.sendMensaje.emit('PApa')
  }
  

}
