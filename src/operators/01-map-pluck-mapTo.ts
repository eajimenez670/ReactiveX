import {fromEvent, range} from 'rxjs';
import {map, mapTo, pluck} from 'rxjs/operators';

// range(1,5)
// .pipe(
//     map<number, number>(val => val * 10)
// )
// .subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCodeMap$ = keyUp$.pipe(map(val => val.code));
const keyUpCodePluck$ = keyUp$.pipe(pluck('target', 'namespaceURI'));
const keyUpMapTo$ = keyUp$.pipe(mapTo('Tecla presionada'));

keyUp$.subscribe(console.log);
keyUpCodeMap$.subscribe(val => console.log('map', val));
keyUpCodePluck$.subscribe(val => console.log('pluck', val));
keyUpMapTo$.subscribe(val => console.log('mapTo', val));
