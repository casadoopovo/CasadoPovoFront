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
  getVereador(vereadorNome: string) {
    let urlParaDownload: string = Constants.VEREADOR_URL + vereadorNome + ".json";

    console.log("caminho " + urlParaDownload);
    return this.http.get(urlParaDownload)
      .timeout(7000)
      .map((res: Response) => res.json());
  }

  /*
   * Pega o Json no Servidor com as informações das impressoras.
   */
  getSessao(sessao: Sessao) {
    let urlParaDownload: string = Constants.SESSAO_URL + sessao.numero_sessao + ".json";

    console.log("caminho " + urlParaDownload);
    return this.http.get(urlParaDownload)
      .timeout(7000)
      .map((res: Response) => res.json());
  }

}
