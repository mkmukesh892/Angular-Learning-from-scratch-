import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  increment = 0;
  buttons = [];
  toggle = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.increment += 1;
    if (this.increment % 2 == 0) {
      this.toggle = false;
    }
    else {
      this.toggle = true;
    }
    this.buttons.push(this.increment);
  }

  getColor() {
    if (this.increment >= 5) {
      return 'blue';
    }
    else {
      return 'white';
    }
  }
}
