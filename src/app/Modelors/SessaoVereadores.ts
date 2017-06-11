/**
 * Created by Bruno Melo on 11/06/17.
 */

export class SessaoVereadores {

  constructor(private _id: number,
              private _sessa_id: number,
              private _vereador_id: number) {
  }


  get id(): number {
    return this._id;
  }

  get sessa_id(): number {
    return this._sessa_id;
  }

  get vereador_id(): number {
    return this._vereador_id;
  }

  static fromJSONArray(array: Array<Object>): SessaoVereadores[] {
    return array.map(obj =>
      new SessaoVereadores(obj['id'], obj['sessao_id'], obj['vereador_id']));
  }
}
