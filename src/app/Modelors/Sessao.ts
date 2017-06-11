/**
 * Created by Bruno Melo on 10/06/17.
 */

export class Sessao {

  constructor(private _numero_sessao:number){
  }

  get numero_sessao(): number {
    return this._numero_sessao;
  }
}
