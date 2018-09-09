import { Component } from '@angular/core';

@Component({
   selector: 'app-root', // element selector
 //  selector: '[app-root]', // attribute selector
  /*selector: '.app-root', // class selector*/
  // slector by id is not supported in angular
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'AppServer', content: 'App server Content'}];
  // name = 'my first angular app';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onIntervalFired(intervalFired: number ) {
    // console.log(intervalFired);
    if( intervalFired % 2 === 0) {
      this.evenNumbers.push(intervalFired);
    }
    else {
      this.oddNumbers.push(intervalFired);
    }
  }
}
