import { debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

// References Body
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(600),
    pluck('target', 'value'),
    map(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll(),
    pluck('items')
).subscribe(res => {
    console.log(res)
});

