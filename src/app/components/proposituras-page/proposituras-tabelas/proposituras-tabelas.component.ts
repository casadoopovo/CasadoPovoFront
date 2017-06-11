import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataBase} from "../../../providers/DataBase";
import {Propositura} from "../../../Modelors/Propositura";
import {Vereador} from "../../../Modelors/Vereador";
import {Router} from "@angular/router";
import {SessaoVereadores} from "../../../Modelors/SessaoVereadores";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'cp-proposituras-tabelas',
  templateUrl: './proposituras-tabelas.component.html',
  styleUrls: ['./proposituras-tabelas.component.css']
})
export class PropositurasTabelasComponent implements OnInit, OnChanges {

  @Input() situacao: string;
  @Input() vereadorNome: string;
  @Input() proposituras: Propositura[] = [];

  private vereador: Vereador;
  private sessaoVereadores: SessaoVereadores[] = [];

  propositurasFiltradas: Propositura[] = [];

  constructor(private database: DataBase, private router: Router) {
  }

  ngOnInit() {
    this.propositurasFiltradas = this.proposituras;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['situacao'] || changes['proposituras']) {
      this.updateFiltrados();
    }

  }

  updateFiltrados() {
    this.propositurasFiltradas = this.proposituras.filter(v =>
      v.situacao == this.situacao
    );

    if (this.vereadorNome) {
      this.vereador = this.database.vereadores.find(v =>
      v.nome == this.vereadorNome);

      let novaProposituraFiltrada: Propositura[] = [];

      // for(let prop of this.propositurasFiltradas) {
      //   let sessaoVereadorID: number;
      //   sessaoVereadorID = prop.secao_vereador;
      //   debugger;
      //
      //   let sessaoVereador: SessaoVereadores[] = this.sessaoVereadores.filter(v =>
      //     v.id == sessaoVereadorID
      //   );
      //
      //   for(let sv of sessaoVereador){
      //     if(sv.vereador_id == this.vereador.id){
      //       novaProposituraFiltrada.push(prop);
      //     }
      //   }
      //
      // }
      this.propositurasFiltradas = novaProposituraFiltrada;

    }
  }


  detalhes(propositura: Propositura) {
    this.router.navigate(["/propositurasDetalhe", propositura.id]);
  }

}
