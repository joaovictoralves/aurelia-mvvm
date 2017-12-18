import * as moment from 'moment';

export class Filter {
  constructor(
    public caixa: number = 0,
    public valor: number = 0,
    public datai: string = moment().format().substring(0, 10),
    public dataf: string = moment().format().substring(0, 10)) { }
}