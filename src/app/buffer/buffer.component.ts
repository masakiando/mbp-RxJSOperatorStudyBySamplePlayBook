import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { buffer, bufferCount, take, tap, bufferToggle } from "rxjs/operators";
@Component({
  selector: "app-buffer",
  templateUrl: "./buffer.component.html",
  styleUrls: ["./buffer.component.css"]
})
export class BufferComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.buffer();
    this.bufferToggle();
  }


  buffer(){
    const source$ = interval(300);
    const source2$ = interval(1000);
    const example = source$.pipe(buffer(source2$), take(3));
    example.subscribe({
      next: (value) => { console.log('buffer',value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    });
    // source : --0--1--2--3--4--5--6--7..
    // source2: ---------0---------1--------...
    //             buffer(source2)
    // example: ---------([0,1,2])---------([3,4,5])        
  }

  bufferToggle(){
    const source$ = interval(500);
    const open$ = interval(1500).pipe(tap(()=> console.log('open'))); 
    const close$ = () => interval(900).pipe(tap(()=> console.log('close'))); 
    const foo$ = source$.pipe(
      tap((v)=> console.log('source', v)),
      bufferToggle(open$, close$),
      take(10) //
    );
    foo$.subscribe(val =>
      console.log('Next', val)
    );
    // ---0---1---2---3---4---5---6---7---8---9---10....    (source)
    // -----------o-----------o-----------o--------...      (open)
    //            --- ---x    --- ---x    --- ---x...      (close)
    //          bufferToggle(open$, () => close$)
    // ------------------([2,3])-----([5.6])-----([8,9])--...
  }

};
