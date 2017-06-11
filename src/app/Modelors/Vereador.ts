/**
 * Created by Bruno Melo on 10/06/17.
 */

import {Constants} from "app/providers/Constants";

export class Vereador {

  private _votos: number;
  private _mandato_fim: number;
  private _declaracao_bens_antes: number;
  private _declaracao_bens_depois: number;

  constructor(private _id: number,
              private _nome: string,
              private _partido: string,
              private _foto_url: string,
              private _mandato_inicio: number,
              private _reeleito: boolean) {
  }

  get nome(): string {
    return this._nome;
  }

  get partido(): string {
    return this._partido;
  }

  get foto_url(): string {
    return this._foto_url;
  }

  get votos(): number {
    return this._votos;
  }

  get mandato_inicio(): number {
    return this._mandato_inicio;
  }

  get mandato_fim(): number {
    return this._mandato_fim;
  }


  get declaracao_bens_antes(): number {
    return this._declaracao_bens_antes;
  }

  get declaracao_bens_depois(): number {
    return this._declaracao_bens_depois;
  }

  get reeleito(): boolean {
    return this._reeleito;
  }

  set votos(value: number) {
    this._votos = value;
  }

  set mandato_fim(value: number) {
    this._mandato_fim = value;
  }

  set declaracao_bens_antes(value: number) {
    this._declaracao_bens_antes = value;
  }

  set declaracao_bens_depois(value: number) {
    this._declaracao_bens_depois = value;
  }


  get id(): number {
    return this._id;
  }

  static fromJSONArray(array: Array<Object>): Vereador[] {
    return array.map(obj => {
      let vereador = new Vereador(obj['id'], obj['nome'], obj['partido'], obj['foto'],
        obj['inicio'], obj['situacao']);

      console.log(Constants.API + obj['foto']);

      vereador.votos = obj['votos'];
      vereador.mandato_fim = obj['fim'];
      vereador.declaracao_bens_antes = obj['bens'];

      return vereador;
    });
  }
}
