import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit, OnChanges {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
    (status: string) => alert('New Status :  ' + status) );
  }

  ngOnInit() {
    document.addEventListener('mousewheel', onmousewheel, {passive: true});
  }
  ngOnChanges() {
   // document.addEventListener('mousewheel', onmousewheel, {passive: true});
    // document.addEventListener('wheel', onwheel, {passive: true});
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({name: accountName, status: accountStatus});
    // console.log('A server status changed, new status: ' + accountStatus );
   // const logging1 = new LoggingService();
   // logging1.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
