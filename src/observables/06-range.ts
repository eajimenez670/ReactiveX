import { range, of, observeOn, asyncScheduler } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9 ,10);
const obs$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('Inicio');
obs$.subscribe(console.log)
console.log('Fin');