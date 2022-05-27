import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
    next: val => console.log('Siguiente: ', val),
    error: err => console.warn('Error: ', err),
    complete: () => console.info('Completado'),
}

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.error('Así no es!!!');

    subs.complete();

    subs.next('Culo');
    subs.next('Sucio');
});

obs$.subscribe(observer);

/// Deprecated
// obs$.subscribe(
//     next => console.log('next', next),
//     err => console.warn('err', err),
//     () => console.log('Complete')
// );
