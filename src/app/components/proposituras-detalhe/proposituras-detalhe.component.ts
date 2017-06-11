import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Propositura} from "../../Modelors/Propositura";
import {DataBase} from "../../providers/DataBase";

@Component({
  selector: 'cp-proposituras-detalhe',
  templateUrl: './proposituras-detalhe.component.html',
  styleUrls: ['./proposituras-detalhe.component.css']
})
export class PropositurasDetalheComponent implements OnInit {

  propositura: Propositura;

  private sub: Subscription;

  constructor(private route: ActivatedRoute, private db: DataBase) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(data => {
      this.propositura = this.db.proposituras.find(v =>
        v.id == data["id"]
      );
    });
  }

}
