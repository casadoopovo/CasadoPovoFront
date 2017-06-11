/**
 * Created by Bruno Melo on 11/06/17.
 */

export class Propositura {

  constructor(private _id: number,
              private _tipo: string,
              private _numero: number,
              private _resumo: string,
              private _situacao: string,
              private _anexo: string,
              private _secao_vereador: number,
              private _vereador_id: number) {

  }

  get id(): number {
    return this._id;
  }

  get tipo(): string {
    return this._tipo;
  }

  get numero(): number {
    return this._numero;
  }

  get resumo(): string {
    return this._resumo;
  }

  get situacao(): string {
    return this._situacao;
  }

  get anexo(): string {
    return this._anexo;
  }

  get secao_vereador(): number {
    return this._secao_vereador;
  }


  get vereador_id(): number {
    return this._vereador_id;
  }

  static fromJSONArray(array: Array<Object>): Propositura[] {
    return array.map(obj =>

      new Propositura(obj['id'], obj['tipo'], obj['numero'], obj['resumo'],
        obj['situacao'], obj['anexo'], obj['secao_vereador'], obj['vereador_id']));

  }
}
