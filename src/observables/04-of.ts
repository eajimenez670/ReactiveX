import { of } from 'rxjs';

// const obs$ = of<number[]>(1, 2, 3, 4, 5, 6);
const obs$ = of({a: 1, b: 2}, "Hola", 234, () => 'hola', Promise.resolve('Hi'));

console.log('Inicio de suscripción');

obs$.subscribe(
    next => console.log('Next', next),
    null,
    () => console.log('Completado')
)

console.log('Fin de suscripción');