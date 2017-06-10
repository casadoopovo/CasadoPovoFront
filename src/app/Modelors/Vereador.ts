/**
 * Created by Bruno Melo on 10/06/17.
 */

export class Vereador {

  constructor(private _nome: string,
              private _partido: string,
              private _foto_url: string,
              private _votos:number,
              private _mandato_inicio:number,
              private _mandato_fim:number,
              private _declaracao_bens_antes:number,
              private _declaracao_bens_depois:number) {
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
}
