import { bindable } from 'aurelia-framework';
import { Account } from '../viewmodel/account';

export class AccountList {
  @bindable
  accounts: Account[] = [];
}
