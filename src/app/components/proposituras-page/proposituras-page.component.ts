import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Propositura} from "../../Modelors/Propositura";
import {DataBase} from "../../providers/DataBase";

@Component({
  selector: 'cp-proposituras-page',
  templateUrl: './proposituras-page.component.html',
  styleUrls: ['./proposituras-page.component.css']
})
export class PropositurasPageComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  private sub2: Subscription;

  situacao: string;
  vereadorNome: string;
  proposituras: Propositura[] = [];

  constructor(private route: ActivatedRoute, private database: DataBase) {
    this.situacao = 'aprovada';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(data => {
      this.vereadorNome = data['nome'];
    });
    this.sub2 = this.route.queryParams.subscribe(data => {
      if (data['situacao'])
        this.situacao = data['situacao'];
    });
    this.proposituras = this.database.proposituras;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }


  filtrar(event: string) {
    this.situacao = event;
  }

}
