// import { Observable, of } from 'rxjs';
// import { ajax } from 'rxjs/ajax';

// const observable$ = new Observable<string>((subscriber) => {
//   subscriber.next('blue');
//   setTimeout(() => {
//     subscriber.next('red');
//   }, 2000);
//   subscriber.next('white');
// });

// const observer = {
//   next: (value) => {
//     console.log(value);
//   },
// };

// const subscription = observable$.subscribe(observer);

// setTimeout(() => {
//   return subscription.unsubscribe();
// }, 4000);

// __________________________________________________________________

// const observable$ = new Observable((subscriber) => {
//   subscriber.next('white');
//   subscriber.next('black');
//   setTimeout(() => {
//     subscriber.next('purple');
//   }, 2000);

//   setTimeout(() => {
//     subscriber.error(new Error('sth went wrong'));
//   }, 4000);

//   return () => {
//     console.log('teardown ');
//   };
// });

// const observer = {
//   next: (value) => {
//     console.log(value);
//   },
//   error: (err) => {
//     console.log(err.message);
//   },
// };

// observable$.subscribe(observer);
// console.log('after subscribe finished');

// __________________________________________________________________

// const interval$ = new Observable<number>((subscriber) => {
//   let counter = 1;

//   const intervalId = setInterval(() => {
//     subscriber.next(counter++);
//   }, 2000);

//   return () => {
//     clearInterval(intervalId);
//   };
// });

// const subscription = interval$.subscribe((value) => {
//   console.log(value);
// });

// setTimeout(() => {
//   console.log('subscription finished');
//   subscription.unsubscribe();
// }, 10000);

// __________________________________________________________________

// COLD OBSERVABLE
// we can have multiple subscription to a single observable and each subscription
// works independently

// const obs$ = ajax<any>(' https://random-data-api.com/api/name/random_name');
// obs$.subscribe({
//   next: (res) => {
//     console.log(res.response.first_name);
//   },
// });

// obs$.subscribe({
//   next: (res) => {
//     console.log(res.response.first_name);
//   },
// });

// __________________________________________________________________
// HOT
// the subscriptions will receive same values at the same time beacuse
//the source of emittion is the same for both
// const btn = document.getElementById('btn');
// const obs$ = new Observable<MouseEvent>((subscriber) => {
//   btn.addEventListener('click', (event) => {
//     subscriber.next(event);
//   });
// });

// obs$.subscribe({
//   next: (event) => {
//     console.log(event.type, event.x, event.y);
//   },
// });
