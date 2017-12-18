import { bindable } from 'aurelia-framework';
import { Account } from '../viewmodel/account';

export class AccountRegister {
  account: Account = new Account();
  qtde:number=0;
  
  @bindable
  accounts: Array<Account> = [];

  addAccount() {
    this.account.data = this.account.data.substring(8,10)+"/"+this.account.data.substring(5,7)+"/"+this.account.data.substring(0,4);
    this.accounts.push(this.account);
    localStorage.setItem("ac"+this.accounts.length,JSON.stringify(this.account));
    this.qtde = Number(localStorage.getItem("qtdeItens"))+1;
    localStorage.setItem("qtdeItens",this.qtde.toString());
    console.log(this.accounts.length);
    this.account = new Account();
  }
}
