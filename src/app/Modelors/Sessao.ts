/**
 * Created by Bruno Melo on 10/06/17.
 */

export class Sessao {

  constructor(private _data: string,
              private _id: number) {
  }

  get data(): string {
    return this._data;
  }

  get id(): number {
    return this._id;
  }

  static fromJSONArray(array: Array<Object>): Sessao[] {
    return array.map(obj =>
      new Sessao(obj['data'], obj['id']));
  }

}
