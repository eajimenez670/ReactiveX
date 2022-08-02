import { catchError, from, map, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/useXXXrs?per_page=5';

const catchErrorsFetch = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response;
}

const catchErrorsAjax = (err: AjaxError) => {
    console.warn('error ajax rxjs', err);
    return from([]);
}

const fetchPromise = fetch(url);

// Fetch Api
// fetchPromise
//     .then(resp => resp.json())
//     .then(val => console.log('val', val))
//     .catch(err => console.warn('err', err))

// Fetch Api - Catch Error
// fetchPromise
//     .then(catchErrors)
//     .then(resp => resp.json())
//     .then(val => console.log('datos del servicio', val))
//     .catch(err => console.warn('error en el servicio', err))

ajax(url).pipe(
    catchError(catchErrorsAjax),
    pluck('response'),
).subscribe(users => console.log('Usuarios', users));