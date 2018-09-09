import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID ;
  serverStatus: string = "offline." ;
  allowNewServer = false;
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverID = Math.round(Math.random() * 100);
  }


  ngOnInit() {
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
