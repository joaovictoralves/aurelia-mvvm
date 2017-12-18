import { bindable } from 'aurelia-framework';
import { Account } from '../viewmodel/account';

export class AccountRegister {
  account: Account = new Account();
  qtde:number=0;
 
  addAccount() {
    this.account.data = this.account.data.substring(8,10)+"/"+this.account.data.substring(5,7)+"/"+this.account.data.substring(0,4);
    this.qtde = Number(localStorage.getItem("qtdeItens"))+1;
    localStorage.setItem("qtdeItens",this.qtde.toString());
    localStorage.setItem("ac"+this.qtde,JSON.stringify(this.account));
    this.account = new Account();
  }
}
