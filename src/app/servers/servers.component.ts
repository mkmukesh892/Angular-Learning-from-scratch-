import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server is created!';
  serverName = 'Tomcat Server';
  serverCreated = false;
  servers = ['TestServer', 'DataServer', 'FileServer'];
  constructor() { setTimeout(() => {this.allowNewServer = true}, 2000) ;}

  ngOnInit() {
  }
  onServerLoading(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'server Created successfuly! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
  }
}
