import { filter, forkJoin, map, Observable, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// interface NewsItem {
//   category: 'Business' | 'Sports';
//   content: string;
// }

// const newsFeed$ = new Observable<NewsItem>((subscriber) => {
//   setTimeout(
//     () => subscriber.next({ category: 'Business', content: 'A' }),
//     1000
//   );
//   setTimeout(() => subscriber.next({ category: 'Sports', content: 'B' }), 3000);
//   setTimeout(
//     () => subscriber.next({ category: 'Business', content: 'C' }),
//     4000
//   );
//   setTimeout(() => subscriber.next({ category: 'Sports', content: 'D' }), 6000);
//   setTimeout(
//     () => subscriber.next({ category: 'Business', content: 'E' }),
//     7000
//   );
// });

// const sportsNewsFeed$ = newsFeed$.pipe(
//   filter((item) => item.category === 'Sports')
// );

// newsFeed$.subscribe((item) => console.log(item));

//__________________________________________________________________

// const randomFirstName$ = ajax<any>('https://random-data-api.com/api/name/random_name').pipe(
//   map(ajaxResponse => ajaxResponse.response.first_name)
// );

// const randomCapital$ = ajax<any>('https://random-data-api.com/api/nation/random_nation').pipe(
//   map(ajaxResponse => ajaxResponse.response.capital)
// );

// const randomDish$ = ajax<any>('https://random-data-api.com/api/food/random_food').pipe(
//   map(ajaxResponse => ajaxResponse.response.dish)
// );

// forkJoin([randomFirstName$, randomCapital$, randomDish$]).subscribe(
//   ([firstName, capital, dish]) =>
//     console.log(`${firstName} is from ${capital} and likes to eat ${dish}.`)
// );

//__________________________________________________________________

// of(1, 7, 3, 6, 2).pipe(
//   filter(value => value > 5),
//   map(value => value * 2),
//   tap({
//     next: value => console.log('Spy:', value)
//   }),
// ).subscribe(value => console.log('Output:', value));

//__________________________________________________________________
