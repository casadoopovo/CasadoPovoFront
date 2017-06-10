import {Component, Input, OnInit} from '@angular/core';
import {Vereador} from "../Modelors/Vereador";

@Component({
  selector: 'cp-politicos-frames',
  templateUrl: './politicos-frames.component.html',
  styleUrls: ['./politicos-frames.component.css']
})
export class PoliticosFramesComponent implements OnInit {

  @Input() vereador: Vereador;

  constructor() { }

  ngOnInit() {
  }

}
