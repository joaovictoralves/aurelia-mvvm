import { bindable } from 'aurelia-framework';
import { Account } from '../viewmodel/account';
import { Filter } from '../viewmodel/filter';

export class AccountList {
  filtro: Filter = new Filter();
  cont: number = 0;
  qtdeContas: number = 0;
  dataInvertida: string = "";
  dataInvertidai: string = "";
  dataInvertidaf: string = "";
  registra: boolean = true;
  account: Account;
  @bindable
  accounts: Account[] = [];

  constructor() {
    localStorage.clear();
    localStorage.setItem("qtdeItens","0");
  }

  updateList() {
    this.registra = true;
    this.qtdeContas = Number(localStorage.getItem("qtdeItens"));
    this.accounts = []
    for (this.cont = 1; this.cont <= this.qtdeContas; this.cont++) {
      console.log("ac" + this.cont);
      this.account = JSON.parse(localStorage.getItem("ac" + this.cont));
      this.dataInvertida = this.invertData(this.account.data);
      this.dataInvertidai = this.invertData2(this.filtro.datai);
      this.dataInvertidaf = this.invertData2(this.filtro.dataf);
      if ((Number(this.dataInvertida) >= Number(this.dataInvertidai)) &&
        (Number(this.dataInvertida) <= Number(this.dataInvertidaf))) {
          console.log("Passou1");
          if (Number(this.account.caixa) == Number(this.filtro.caixa)) {} else this.registra = false;
      } else this.registra = false;
      if (this.registra) {
        console.log("Registra");
        this.accounts.push(this.account);
      } else this.registra = true;
    }
  }

  invertData(data: string) {
    return data.substring(6, 10) + data.substring(3, 5) + data.substring(0, 2);
  }

  invertData2(data: string) {//2017-12-18
    return data.substring(0, 4) + data.substring(5, 7) + data.substring(8, 10);
  }
}
