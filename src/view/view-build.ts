import { Account } from '../viewmodel/account';
import { Tabs } from '../viewmodel/tabs';
import { View } from 'aurelia-framework';

export class AccountList {
    accounts: Account[] = [];
    tab: Tabs = new Tabs();
}
