import './style.css';
import { of, map, Observable, fromEvent, EMPTY } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

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

const btnFetch = document.getElementById('btnFetch');
const input = document.getElementById('concatInput') as HTMLInputElement;

fromEvent(btnFetch, 'click')
  .pipe(
    map((value) => input.value),
    concatMap((value) =>
      ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
        // catchError(() => EMPTY)
        catchError((err) => of(`bad request , ${err}`))
      )
    )
  )
  .subscribe({
    next: (value) => {
      console.log(value);
    },
    error: (err) => {
      console.log('error : ', err);
    },
    complete: () => {
      console.log('completed');
    },
  });
  
//__________________________________________________________________
