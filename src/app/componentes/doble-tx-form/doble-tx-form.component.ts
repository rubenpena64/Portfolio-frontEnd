import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DobleTexto } from 'src/app/model/clasesEntradas';

@Component({
  selector: 'app-doble-tx-form',
  templateUrl: './doble-tx-form.component.html',
  styleUrls: ['./doble-tx-form.component.css']
})
export class DobleTxFormComponent implements OnInit {
  @Input() textos!: DobleTexto;
  @Output() resultadoEvent = new EventEmitter<DobleTexto>();
  
  constructor() { }

  ngOnInit(): void {
  }
  emitirEditado() {
    if (this.validar()) {
      this.textos.Resultado = "Editado"
      this.resultadoEvent.emit(this.textos);
    } else {
      alert("Los dos campos son obligatorios")
    }   
  }
  emitirCancel() {
    this.textos.Resultado = "Cancel"
    this.resultadoEvent.emit(this.textos);
  }

  validar(): boolean {

    if ((this.textos.tx1 == "") || (this.textos.tx2 == ""))
      return false;
    else
      return true;
  }
}
