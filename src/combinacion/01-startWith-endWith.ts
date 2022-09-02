import { endWith, from, startWith } from "rxjs";

const numeros$ = from([1, 2, 3, 4, 5]);

// Start With
// End With
numeros$.pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
).subscribe(console.log);