import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-finding',
  templateUrl: './error-finding.component.html',
  styleUrls: ['./error-finding.component.css']
})
export class ErrorFindingComponent implements OnInit {

  servers = [];
  constructor() { }

  ngOnInit() {
  }
  onAddServer(){
    this.servers.push('Another Server');
  }
  onRemoveServer(id: number){
    const position = id ;
    this.servers.splice(position , 1);
  }
}
