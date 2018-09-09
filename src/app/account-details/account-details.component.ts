import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  accounts: {name: string, status: string} [] = [];
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
/*onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
}
onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
}*/
}
