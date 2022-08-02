import { catchError, from, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'

const url = 'https://httpbin.org/delays/1';
// const url = 'https://api.github.com/users?per_page=5';

const manejaError = (err: AjaxError) => {
    console.warn('error:', err.message);
    return of({
        ok: false,
        users: []
    });
}

// const obs1$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

// obs1$.subscribe(resp => console.log('getJson: ', resp));
// obs2$.subscribe(resp => console.log('ajax: ', resp));

const obs1$ = ajax.getJSON(url);

obs1$.pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error:', err),
    complete: () => console.log('complete')
});

