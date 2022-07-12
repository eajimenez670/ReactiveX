import { range, take, tap } from "rxjs";

const numbers$ = range(1, 5).pipe(
    tap(val => console.log('Tap', val))
);

numbers$.pipe(
    take(3)
).subscribe({
    next: val => console.log('Next', val),
    complete: () => console.log('Complete')
});