import {Component, Input, OnInit} from '@angular/core';
import {Vereador} from "../../../Modelors/Vereador";

@Component({
  selector: 'cp-vereador-detalhes',
  templateUrl: './vereador-detalhes.component.html',
  styleUrls: ['./vereador-detalhes.component.css']
})
export class VereadorDetalhesComponent implements OnInit {

  @Input() vereador: Vereador;

  constructor() { }

  ngOnInit() {
  }

}
