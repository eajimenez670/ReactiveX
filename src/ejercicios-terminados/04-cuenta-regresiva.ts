import { interval, map, takeWhile } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {

    const inicio = 15;
    const countdown$ = interval(700).pipe(
        map(x => inicio - x),
        takeWhile(x => x >= 0)
    );


    // No tocar esta línea ==================
    countdown$.subscribe(
        {
            next: val => console.log(val),
            complete: () => console.log('Complete')
        }
    ); // =
    // ======================================


})();

