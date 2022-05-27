import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
    next: val => console.log('Siguiente: ', val),
    error: err => console.warn('Error: ', err),
    complete: () => console.info('Completado'),
}
