import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Vereador} from "../Modelors/Vereador";
import {Sessao} from "../Modelors/Sessao";
import {Constants} from "./Constants";

@Injectable()
export class ServiceProvider {

  constructor(private http: Http) {
  }

  /*
   * Pega o Json no Servidor com todas as informações gerais dos vereadores.
   */
  getVereadores() {
    console.log("caminho " + Constants.VEREADORES_URL);
    return this.http.get(Constants.VEREADORES_URL)
      .map((res: Response) => res.json());
  }

  /*
   * Pega o Json no Servidor com as informações especificas do vereador.
   */
  getProposituras() {
    let urlParaDownload: string = Constants.PROPOSITURAS_URL;

    console.log("caminho " + urlParaDownload);
    return this.http.get(urlParaDownload)
      .map((res: Response) => res.json());
  }

  /*
   * Pega o Json no Servidor com as informações das impressoras.
   */
  getSessao() {
    let urlParaDownload: string = Constants.SESSAO_URL;

    console.log("caminho " + urlParaDownload);
    return this.http.get(urlParaDownload)
      .map((res: Response) => res.json());
  }


  /*
   * Pega o Json no Servidor com as informações das impressoras.
   */
  getSessaoVereadores() {
    let urlParaDownload: string = Constants.SESSAO_VEREADORES_URL;

    console.log("caminho " + urlParaDownload);
    return this.http.get(urlParaDownload)
      .map((res: Response) => res.json());
  }

}
