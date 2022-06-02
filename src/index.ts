import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
    next: val => console.log('Siguiente: ', val),
    error: err => console.warn('Error: ', err),
    complete: () => console.info('Completado'),
}

const interval$ = new Observable<number>(subs => {
    const intervalId = setInterval(() => subs.next(Math.floor(Math.random() * (500 - 0)) + 0), 5000);

    return () => clearInterval(intervalId);
});

/**
 * 1. Casteo Múltiple
 * 2. También es un observer
 * 3. Next, error y complete
 */
const subject$ = new Subject();
interval$.subscribe(subject$);


// interval$.subscribe(rnd => console.log('Sub1', rnd));
// interval$.subscribe(rnd => console.log('Sub2', rnd));

subject$.subscribe(rnd => console.log('Sub1', rnd));
subject$.subscribe(rnd => console.log('Sub2', rnd));