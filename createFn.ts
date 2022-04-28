// import { forkJoin, from, Observable, of } from 'rxjs';
// import { ajax } from 'rxjs/ajax';

// __________________________________________________________________

// of('blue', 'red', 'purple').subscribe({
//   next: (values) => {
//     console.log(values);
//   },
// });

// creating of with observable obj

// const obs$ = new Observable((subscriber) => {
//   subscriber.next('blue');
//   subscriber.next('red');
//   subscriber.next('purple');
//   subscriber.complete();
// });

// obs$.subscribe({
//   next: (obs) => {
//     console.log(obs);
//   },
//   complete: () => {
//     console.log('completed');
//   },
// });

// creating of
// function ourOwnOf(...args: string[]): Observable<string> {
//   return new Observable((subscriber) => {
//     args.forEach((item) => {
//       subscriber.next(item);
//     });
//     subscriber.complete();
//   });
// }

// ourOwnOf('purpe', 'white', 'black').subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   complete: () => {
//     console.log('completed');
//   },
// });

//__________________________________________________________________

// from([23, 534, 28, 55]).subscribe({
//   next: (val) => {
//     console.log(val);
//   },
// });

//__________________________________________________________________

// const promise = new Promise((resolve, reject) => {
//   // resolve('resolved');
//   reject('error has occured');
// });

// from(promise).subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   complete: () => {
//     console.log('completed');
//   },
//   error: (err) => {
//     console.log(err);
//   },
// });
//__________________________________________________________________

// const triggerButton = document.getElementById('btn');

// // const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
// //   event => console.log(event.type, event.x, event.y)
// // );

// const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
//   const clickHandlerFn = (event) => {
//     console.log('Event callback executed');
//     subscriber.next(event);
//   };

//   triggerButton.addEventListener('click', clickHandlerFn);

//   return () => {
//     triggerButton.removeEventListener('click', clickHandlerFn);
//   };
// });

// const subscription = triggerClick$.subscribe((event) =>
//   console.log(event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 5000);

//__________________________________________________________________

// console.log('App started');

// const timer$ = new Observable<number>(subscriber => {
//   const timeoutId = setTimeout(() => {
//     console.log('Timeout!');
//     subscriber.next(0);
//     subscriber.complete();
//   }, 2000);

//   return () => clearTimeout(timeoutId);
// });

// const subscription = timer$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('Unsubscribe');
// }, 1000);

//__________________________________________________________________

// console.log('App started');

// const interval$ = new Observable<number>(subscriber => {
//   let counter = 0;

//   const intervalId = setInterval(() => {
//     console.log('Timeout!');
//     subscriber.next(counter++);
//   }, 1000);

//   return () => clearInterval(intervalId);
// });

// const subscription = interval$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('Unsubscribe');
// }, 5000);

//__________________________________________________________________

// const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

// const randomNation$ = ajax(
//   'https://random-data-api.com/api/nation/random_nation'
// );

// const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// forkJoin<any>([randomName$, randomNation$, randomFood$]).subscribe(
//   ([nameAjax, nationAjax, foodAjax]) =>
//     console.log(
//       `${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`
//     )
// );

//__________________________________________________________________
