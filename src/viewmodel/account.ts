import * as moment from 'moment';

export class Account {
  public caixa: number;
  public tipo: number;
  public valor: number;
  public descricao: string = ""
  public data: string = moment().format().substring(0,10)

  constructor(){}
}
