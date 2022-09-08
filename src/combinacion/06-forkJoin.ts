import { delay, forkJoin, from, interval, of, take } from "rxjs";

const numeros$ = of(0, 1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(
//     numeros$,
//     interval$,
//     letters$
// ).subscribe(console.log);

// forkJoin(
//     numeros$,
//     interval$,
//     letters$
// ).subscribe(res => {
//     console.log('Números', res[0]);
//     console.log('Intervalo', res[1]);
//     console.log('Letras', res[2]);
// });

// forkJoin({
//     numeros$,
//     interval$,
//     letters$
// }
// ).subscribe(console.log);

forkJoin({
    num: numeros$,
    int: interval$,
    let: letters$
}
).subscribe(console.log);