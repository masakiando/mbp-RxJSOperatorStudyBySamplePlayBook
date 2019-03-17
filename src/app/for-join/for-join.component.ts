import { Component, OnInit } from '@angular/core';
import { forkJoin, interval } from "rxjs";
import { take, } from "rxjs/operators";

@Component({
  selector: 'app-for-join',
  templateUrl: './for-join.component.html',
  styleUrls: ['./for-join.component.css']
})
export class ForJoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.forkJoin();
  }

  forkJoin(){
    const source$ = interval(1000);
    const source2$ = interval(500)

    const foo$ = forkJoin(
      source$.pipe(take(3)),
      source2$.pipe(take(4)),
    );
    foo$.subscribe(val =>
      console.log('Next', val)
    );
  }
}
