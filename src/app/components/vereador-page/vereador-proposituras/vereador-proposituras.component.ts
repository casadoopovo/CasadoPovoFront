import {Component, Input} from '@angular/core';
import {Vereador} from "../../../Modelors/Vereador";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'cp-vereador-proposituras',
  templateUrl: './vereador-proposituras.component.html',
  styleUrls: ['./vereador-proposituras.component.css']
})
export class VereadorPropositurasComponent {

  constructor(private router: Router){
  }

  @Input() vereador: Vereador;

  navegaPropositura(situacao: string) {
    let extras: NavigationExtras = {
      queryParams: {
        "situacao": situacao
      }
    };


    this.router.navigate(["/proposituras", this.vereador.nome], extras);
  }

}
