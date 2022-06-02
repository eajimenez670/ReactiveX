import { Observable, Observer } from "rxjs";

const observer: Observer<number> = {
    next: val => console.log('Siguiente: ', val),
    error: err => console.warn('Error: ', err),
    complete: () => console.info('Completado'),
}

const interval$ = new Observable<number>(subs => {
    let time = 0;

    const int = setInterval(() => {
        time++;
        subs.next(time);
        console.log('Inter: ', time);
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500)

    return () => {
        clearInterval(int);
        console.log('Intérvalo Destruido')
    }
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();    

    console.log('Desuscripcion Completada');
}, 6000)