import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TripleTexto } from 'src/app/model/clasesEntradas';

@Component({
  selector: 'app-acerca-form',
  templateUrl: './acerca-form.component.html',
  styleUrls: ['./acerca-form.component.css']
})
export class AcercaFormComponent implements OnInit {

  @Input() textos!: TripleTexto;
  @Output() resultadoEvent = new EventEmitter<TripleTexto>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirEditado() {
   {
      this.textos.Resultado = "Editado"
      this.resultadoEvent.emit(this.textos);    
    }   
  }

  emitirCancel() {
    this.textos.Resultado = "Cancel"
    this.resultadoEvent.emit(this.textos);
  }

 

}
