import * as moment from 'moment';

export class Account {
  constructor(
    public caixa: number = 0,
    public tipo: number = 0,
    public valor: number = 0,
    public descricao: string = "",
    public data: string = moment().format().substring(0,10)){}
}
