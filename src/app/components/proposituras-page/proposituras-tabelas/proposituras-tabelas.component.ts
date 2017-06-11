import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataBase} from "../../../providers/DataBase";
import {Propositura} from "../../../Modelors/Propositura";
import {Vereador} from "../../../Modelors/Vereador";
import {Router} from "@angular/router";
import {SessaoVereadores} from "../../../Modelors/SessaoVereadores";

@Component({
  selector: 'cp-proposituras-tabelas',
  templateUrl: './proposituras-tabelas.component.html',
  styleUrls: ['./proposituras-tabelas.component.css']
})
export class PropositurasTabelasComponent implements OnInit, OnChanges, AfterViewInit {

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

  ngAfterViewInit(): void {
    this.updateFiltrados();
  }


  ngOnChanges(changes: SimpleChanges): void {
      this.updateFiltrados();
  }

  updateFiltrados() {
    this.propositurasFiltradas = this.proposituras.filter(v =>
      v.situacao == this.situacao
    );

    if (this.vereadorNome) {
      this.vereador = this.database.vereadores.find(v =>
      v.nome == this.vereadorNome);

      this.propositurasFiltradas = this.propositurasFiltradas.filter(v =>
        v.vereador_id == this.vereador.id
      );
    }
  }


  detalhes(propositura: Propositura) {
    this.router.navigate(["/propositurasDetalhe", propositura.id]);
  }

}
