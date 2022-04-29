import './style.css';
import { of, map, Observable } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';

// const obs$ = new Observable((subscriber) => {
//   setTimeout(() => {
//     subscriber.next('A');
//   }, 3000);

//   setTimeout(() => {
//     subscriber.next('B');
//   }, 6000);
// });
// obs$
//   .pipe(concatMap((value) => of(1000, 2000)))
//   .subscribe((value) => console.log(value));
