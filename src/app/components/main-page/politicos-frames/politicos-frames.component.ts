import {Component, Input} from '@angular/core';
import {Vereador} from "../../../Modelors/Vereador";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'cp-politicos-frames',
  templateUrl: './politicos-frames.component.html',
  styleUrls: ['./politicos-frames.component.css']
})
export class PoliticosFramesComponent {

  constructor(private router: Router){
  }

  @Input() vereador: Vereador;

  navegarVereador(){

    this.router.navigate(['/vereador', this.vereador.nome]);
  }

}
