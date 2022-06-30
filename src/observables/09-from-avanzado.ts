import { of, from } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (const id of miIterable) {
//     console.log(id);
// }

from(miIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);

// const source$ = from('Edison');

// const source$ = from(fetch('https://api.github.com/users/eajimenez670'));
// source$.subscribe(async (resp) => {
//     console.log(resp);
//     const dataResp = await resp.json();
//     console.log(dataResp);
// });

// source$.subscribe(observer);
