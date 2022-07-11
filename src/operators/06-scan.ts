import { from, map, reduce, scan } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acc, cur) => acc + cur;

// Reduce
from(numbers)
    .pipe(
        reduce(totalReducer, 0)
    ).subscribe(val => console.log('reduce:', val));

// Scan
from(numbers)
    .pipe(
        scan(totalReducer, 0)
    ).subscribe(val => console.log('scan:', val));

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'Edi', autenticado: false, token: null },
    { id: 'Edi', autenticado: true, token: 'qwerty' },
    { id: 'Edi', autenticado: true, token: 'qwerty_refresh' }
];

const state$ = from(user)
    .pipe(
        scan<Usuario, Usuario>((acc, cur) => {
            return { ...acc, ...cur }
        }, { edad: 33 })
    );

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);

