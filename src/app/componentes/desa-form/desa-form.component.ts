import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InDesarrollo, TripleTexto } from 'src/app/model/clasesEntradas';

@Component({
  selector: 'app-desa-form',
  templateUrl: './desa-form.component.html',
  styleUrls: ['./desa-form.component.css']
})
export class DesaFormComponent implements OnInit {
  /* Detalles de los campos en la declaracion (clasesEntradas)
   En textos se reciben los datos vacios para agregar o completos para modificar
   si se agregó o modificó se emite con el campo resultado= "Editado" o "Cancel" si se canceló */
  @Input() textos!: InDesarrollo;
  @Output() resultadoEvent = new EventEmitter<InDesarrollo>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirEditado() {
    if (this.validar()) {
      this.textos.Resultado = "Editado"
      this.resultadoEvent.emit(this.textos);    
    }   
  }

  emitirCancel() {
    this.textos.Resultado = "Cancel"
    this.resultadoEvent.emit(this.textos);
  }

  validar(): boolean { 
    if (this.textos.tit.length < 5) {
      alert("El campo título debe contener al menos cinco caracteres")
      return false;
    } else if (this.textos.desc.length < 30){
      alert("El campo descripción debe contener al menos treinta caracteres")
      return false;
    }
    else    
      return true;
  }
}
/* Desarrollo de hardware y software de varios modelos de limitadores de carga, con lectura a una o dos celdas de carga, uno a cuatro relays, y salida RS232, RS485 y transmición inalámbrica por RF. Usé Altium Protel y C
./assets/Img/ex1.jpg  */