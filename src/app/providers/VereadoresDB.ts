import {Vereador} from "../Modelors/Vereador";
/**
 * Created by Bruno Melo on 10/06/17.
 */

export class VereadoresDB {

  private _vereadores: Vereador[] = [];

  get vereadores(): Vereador[] {
    return this._vereadores;
  }

  set vereadores(value: Vereador[]) {
    this._vereadores = value;
  }
}
