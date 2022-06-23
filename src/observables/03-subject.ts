import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<unknown> = {
    next: val => console.log('Siguiente: ', val),
    error: err => console.warn('Error: ', err),
    complete: () => console.info('Completado'),
}

const interval$ = new Observable<number>(subs => {
    const intervalId = setInterval(() => subs.next(Math.floor(Math.random() * (500 - 0)) + 0), 1000);

    return () => {
        clearInterval(intervalId);
        console.log("Intérvalo destruido.")
    }
});

/**
 * 1. Casteo Múltiple
 * 2. También es un observer
 * 3. Next, error y complete
 */
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);


// interval$.subscribe(rnd => console.log('Sub1', rnd));
// interval$.subscribe(rnd => console.log('Sub2', rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);

