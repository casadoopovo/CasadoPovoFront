import {Component, OnInit} from '@angular/core';
import {ServiceProvider} from "./providers/Service.provider";
import {Propositura} from "./Modelors/Propositura";
import {DataBase} from "./providers/DataBase";
import {Sessao} from "./Modelors/Sessao";
import {SessaoVereadores} from "./Modelors/SessaoVereadores";

@Component({
  selector: 'app-root',
  template: `
    <cp-toolbar></cp-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(private serviceProvider: ServiceProvider,
              private db: DataBase) {

  }

  ngOnInit(): void {
    let proposituras: Propositura[] = [];
    let sessao: Sessao[] = [];
    let sessaoVereadores: SessaoVereadores[] = [];
    this.serviceProvider.getProposituras().subscribe(data => {
      proposituras = Propositura.fromJSONArray(data);
    }, err => {
      console.log(err);
    }, () => {
      this.db.proposituras = proposituras;
    });

    this.serviceProvider.getSessao().subscribe(data => {
      sessao = Sessao.fromJSONArray(data);
    }, err => {
      console.log(err);
    }, () => {
      this.db.sessao = sessao;
    });

    this.serviceProvider.getSessaoVereadores().subscribe(data => {
      sessaoVereadores = SessaoVereadores.fromJSONArray(data);
    }, err => {
      console.log(err);
    }, () => {
      this.db.sessaoVereadores = sessaoVereadores;
    });

  }

}
