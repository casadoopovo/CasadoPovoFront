/**
 * Created by Bruno Melo on 10/06/17.
 */

export class Constants {
  public static get API(): string { return "http://192.168.0.104:8000" };
  public static get VEREADORES_URL(): string { return this.API + "/api/getVereadores" };
  public static get VEREADOR_URL(): string { return "" };
  public static get SESSAO_URL(): string { return "" };

}
