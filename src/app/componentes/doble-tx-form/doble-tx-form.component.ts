import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DobleTexto } from 'src/app/model/clasesEntradas';

@Component({
  selector: 'app-doble-tx-form',
  templateUrl: './doble-tx-form.component.html',
  styleUrls: ['./doble-tx-form.component.css']
})
export class DobleTxFormComponent implements OnInit {
/* Detalles de los campos en la declaracion (clasesEntradas)
   En textos se reciben los datos vacios para agregar o completos para modificar
   si se agregó o modificó se emite con el campo resultado= "Editado" o "Cancel" si se canceló */
  @Input() textos!: DobleTexto;   
  @Output() resultadoEvent = new EventEmitter<DobleTexto>();
  
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

    if ((this.textos.tx1 == "") || (this.textos.tx2 == ""))
    {
      alert("Los dos campos son obligatorios");
      return false;
    }
    else if(Number.isNaN(parseInt(this.textos.tx2, 10)))
    {
      
      alert("El nivel debe ser mayor a cero");
      return false;
    }
    else
      return true;
  }
}
