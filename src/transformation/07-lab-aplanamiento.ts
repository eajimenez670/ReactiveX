import { catchError, exhaustMap, from, fromEvent, map, mergeMap, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helpers
const requestHttp = (userPass) => ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    map(res => res.response['token']),
    catchError(err => from(['Petición inválida']))
);

// Creando el formulario del login
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const button = document.createElement('button');

// Propiedades
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

button.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, button);
document.querySelector('body').append(form);


// Streams
const submitForm$ = fromEvent(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    exhaustMap(requestHttp)
);

submitForm$.subscribe(token => console.log(token));



