import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>() ;
  // account: {name: string, status: string};
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit() {
  }
  onSetTo(status: string) {
   /*this.statusChanged.emit({
      id:this.id,
      newStatus: status
    });*/
    // console.log('A server status changed, new status: ' + status );
    this.accountsService.updateStatus(this.id, status);
   // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
