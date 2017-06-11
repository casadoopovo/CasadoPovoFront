import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Vereador} from "../../Modelors/Vereador";
import {VereadoresDB} from "../../providers/VereadoresDB";

@Component({
  selector: 'cp-vereador-page',
  templateUrl: './vereador-page.component.html',
  styleUrls: ['./vereador-page.component.css']
})
export class VereadorPageComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  vereador: Vereador;

  constructor(private route: ActivatedRoute, private vereadoresDB: VereadoresDB) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.vereador = this.vereadoresDB.vereadores.find(v => v.nome == params["nome"]);
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
