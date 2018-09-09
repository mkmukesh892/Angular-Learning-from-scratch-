import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  /*newServerContent = '';*/
  // serverElements = [];
  @ViewChild('newServerContent') newServerContent: ElementRef;
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  constructor() { }

  ngOnInit() {
  }
onAddServer(serverName1: HTMLInputElement) {
   console.log(serverName1.value);
this.serverCreated.emit({serverName: serverName1.value, serverContent: this.newServerContent.nativeElement.value});
}
onAddBlueprint(serverName1: HTMLInputElement) {
this.bluePrintCreated.emit({serverName: serverName1.value, serverContent: this.newServerContent.nativeElement.value});
}
}
