import { Component, OnDestroy, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {
  public items: any[] = [
    {id: 1, value: 'item1'},
    {id: 2, value: 'item2'},
    {id: 3, value: 'item3'}
  ];

  public deleteSubject = new Subject();

  public deleteItems$ = this.deleteSubject.asObservable().pipe(
    concatMap((id, index) => {
      if (id === 1) {
          return this.deleteItem(id).pipe(delay(3000))
      }
      return this.deleteItem(id)
    },null) // selector function - we don't need it here.
);

private subscription: Subscription;

constructor() {
}

ngOnInit() {
    this.subscription = this.deleteItems$.subscribe((response) => {
        let index = this.items.findIndex((item) => response.id === item.id);
        this.items.splice(index, 1);
    });
}

ngOnDestroy() {
    this.subscription.unsubscribe();
}

deleteItem(id) {
    // return ajax.post(deleteUrl, headers, {id})
    console.log(id);
    
    return of({id, success: true}).pipe(delay(100));
}
  // ngOnInit() {
  //   this.concatMap();
  // }


  // concatMap(){
  //   of(1,2,3)
  //   .pipe(concatMap((x, i) => [x, 3 * x]))
  //   .subscribe(x=>console.log(x));
  // }
}

