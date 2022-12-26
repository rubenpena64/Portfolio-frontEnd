import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tripleTexto } from 'src/app/model/clasesEntradas';


@Component({
  selector: 'app-triple-tx-form',
  templateUrl: './triple-tx-form.component.html',
  styleUrls: ['./triple-tx-form.component.css']
})
export class TripleTxFormComponent implements OnInit {
  @Input() textos!: tripleTexto;
  @Output() resultadoEvent = new EventEmitter<tripleTexto>();



  constructor() { }

  ngOnInit(): void {


  }
  emitirEditado() {
    if (this.validar()) {
      this.textos.Resultado = "Editado"
      this.resultadoEvent.emit(this.textos);
    } else {
      alert("Los tres campos son obligatorios")
    }
   
  }
  emitirCancel() {
    this.textos.Resultado = "Cancel"
    this.resultadoEvent.emit(this.textos);
  }

  validar(): boolean {

    if ((this.textos.tx1 == "") || (this.textos.tx2 == "") || (this.textos.tx3 == ""))
      return false;
    else
      return true;
  }
}
