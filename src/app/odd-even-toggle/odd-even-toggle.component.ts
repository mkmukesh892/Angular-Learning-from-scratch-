import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-even-toggle',
  templateUrl: './odd-even-toggle.component.html',
  styleUrls: ['./odd-even-toggle.component.css']
})
export class OddEvenToggleComponent implements OnInit {
  oddOnly = false;
  oddNumbs = [ 1, 3, 5, 7, 9];
  evenNumbs = [2, 4, 6, 8, 10];
  value = 2;
  constructor() { }

  ngOnInit() {
  }

}
