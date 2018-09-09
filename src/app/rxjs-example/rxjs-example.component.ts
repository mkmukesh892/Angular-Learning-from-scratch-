import { Component, OnInit } from '@angular/core';
import {interval, of, pipe} from 'rxjs';
import {fromEvent} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {filter, map} from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.css']
})
export class RxjsExampleComponent implements OnInit {

  constructor() {
    const secondCounter = interval(1000);
    secondCounter.subscribe((n) => console.log(`It's been ${n} seconds since subscribing!`));
  }
  mouseMovement() {
    const el = document.getElementsByClassName('my-element');
    const mouseMoves = fromEvent(el, 'mousemove');
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
  }
  ngOnInit() {
    this.mouseMovement();
    this.ajaxExample();
    this.operatorExample();
  }
  ajaxExample() {
    const apiData = ajax('https://jsonplaceholder.typicode.com/posts/1');
    apiData.subscribe((res) => console.log(res.status, res.response));
  }

  operatorExample() {
    /*const nums = of(1, 2, 3, 4, 5 );
    const squareValues = map((val: number) => val * val );
    const squareOddVals = pipe(filter(n => n % 2), map(n => n * n));
    const squareEvenVals = pipe(filter(n => n % 2 === 0 ), map(n => n * n));
    const squareNums = squareValues(nums);
    const squareOdd = squareOddVals(nums);
    const squareEven = squareEvenVals(nums);
    squareEven.subscribe(x => console.log(x));
    squareOdd.subscribe(x => console.log(x));
    squareNums.subscribe(x => console.log(x));*/
  }

}
