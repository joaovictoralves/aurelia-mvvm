import { bindable } from 'aurelia-framework';
import { Account } from '../viewmodel/account';

export class AccountRegister {
  account: Account = new Account();
  
  @bindable
  accounts: Array<Account> = [];

  addAccount() {
    this.accounts.push(this.account);
    this.account = new Account();
  }
}
