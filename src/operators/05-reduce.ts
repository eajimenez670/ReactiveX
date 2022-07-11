import { interval, reduce, take, tap } from "rxjs";

// Reducer JS
const numbers = [1, 2, 3, 4, 5, 6];

const reducer = (accu: number, curr: number) =>
    accu + curr;

const total = numbers.reduce(reducer, 0);
console.log('total arr', total);

// RxJS operator
interval(500)
    .pipe(
        take(5),
        tap(console.log),
        reduce(reducer)
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    });