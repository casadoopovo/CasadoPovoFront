import {Component, Input, OnInit} from '@angular/core';
import {Vereador} from "../../../Modelors/Vereador";

@Component({
  selector: 'cp-frames-containers',
  templateUrl: './frames-containers.component.html',
  styleUrls: ['./frames-containers.component.css']
})
export class FramesContainersComponent implements OnInit {

  @Input() vereadores: Vereador[] = [];

  constructor() { }

  ngOnInit() {
    // let vereador1 = new Vereador(1, "fulano de tal", "PXZA", "/assets/vereador.jpeg", 2014, true);
    // let vereador2 = new Vereador(2, "Cicrano", "PPDO", "/assets/vereador.jpeg", 2014, false);
    // let vereador3 = new Vereador(3, "carinha", "PCVE", "/assets/vereador.jpeg",2014, false);
    // let vereador4 = new Vereador(4, "Dr. Honesto", "PN", "/assets/vereador.jpeg", 2014, true);
    // let vereador5 = new Vereador(5, "Dr. Honesto nem PWD", "PMDB", "/assets/vereador.jpeg", 2014, true);
    // let vereador6 = new Vereador(6, "Dr. não honesto", "PCC", "/assets/vereador.jpeg", 2014, false);
    // this.vereadores.push(vereador1);
    // this.vereadores.push(vereador2);
    // this.vereadores.push(vereador3);
    // this.vereadores.push(vereador4);
    // this.vereadores.push(vereador5);
    // this.vereadores.push(vereador6);
  }

}
