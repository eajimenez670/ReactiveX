import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';

/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() => {
    // == NO TOCAR este bloque ====================
    const reloj$ = interval(1000).pipe(
        take(5),
        map(val => Math.round(Math.random() * 100))
    );
    // No tocar la creación del observable
    // ============================================

    // Solución
    const subject$ = new Subject();

    reloj$.subscribe(subject$);
    subject$.subscribe(x => console.log('obs1', x))
    subject$.subscribe(x => console.log('obs2', x))
    subject$.subscribe(x => console.log('obs3', x))
})();