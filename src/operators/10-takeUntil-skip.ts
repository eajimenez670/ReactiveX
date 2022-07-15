import { fromEvent, interval, skip, takeUntil, tap } from 'rxjs';

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';
document.querySelector('body').append(button);

const interval$ = interval(1000);
const clickBtn$ = fromEvent<MouseEvent>(button, 'click').pipe(
    tap(() => console.log('Tap antes del skip')),
    skip(1),
    tap(() => console.log('Tap después del skip')),
);

interval$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});