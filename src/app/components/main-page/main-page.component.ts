import {Component, OnInit} from '@angular/core';
import {ServiceProvider} from "../../providers/Service.provider";
import {Vereador} from "../../Modelors/Vereador";
import {VereadoresDB} from "../../providers/VereadoresDB";

@Component({
  selector: 'cp-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  vereadores: Vereador[] = [];
  carregando: boolean = false;

  constructor(private serviceProvider: ServiceProvider, private vereadoresDB: VereadoresDB) {
  }

  ngOnInit() {
    if (this.vereadoresDB.vereadores.length == 0) {
      this.baixaListaVereadores().then(result => {
        this.vereadores = result;
        this.vereadoresDB.vereadores = result;
      }).catch(err => console.log(err));
    } else {
      this.vereadores = this.vereadoresDB.vereadores;
    }
  }

  private baixaListaVereadores(): Promise<Vereador[]> {
    this.carregando = true;
    let vereadores: Vereador[] = [];
    return new Promise((resolve, reject) => {
      this.serviceProvider.getVereadores().subscribe(data => {
        vereadores = Vereador.fromJSONArray(data);
      }, (err) => {
        console.log("err " + err);
        reject(err);
      }, () => {
        this.carregando = false;
        resolve(vereadores);
      });
    }).catch(err => console.log(err));
  }

}
