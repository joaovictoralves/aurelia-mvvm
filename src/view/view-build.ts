import { Account } from '../viewmodel/account';
import { Tabs } from '../viewmodel/tabs';
import { View } from 'aurelia-framework';

export class ViewBuild {
    tab: Tabs = new Tabs();
    accounts: Account[] = [];
}
