/**
 * Created by Bruno Melo on 10/06/17.
 */

export class Constants {
  public static get API(): string { return "http://192.168.0.104:8000" };
  // public static get API(): string { return "http://localhost:8000" };
  public static get VEREADORES_URL(): string { return "https://casa-do-povo-41d1a.firebaseio.com/vereadores.json" };
  public static get PROPOSITURAS_URL(): string { return "https://casa-do-povo-41d1a.firebaseio.com/proposituras.json" };
  public static get SESSAO_URL(): string { return "https://casa-do-povo-41d1a.firebaseio.com/secao.json" };
  public static get SESSAO_VEREADORES_URL(): string { return "https://casa-do-povo-41d1a.firebaseio.com/secao_vereadores.json" };

}
