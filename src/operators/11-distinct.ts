import { distinct, from } from 'rxjs';

const numbers = [1, 1, 3, 5, 8, 8, 8, 6, 7, 7, 5, 4, 4, 4, 1, 1, 1, 9]
const subs$ = from(numbers);

subs$.pipe(
    distinct()
).subscribe(console.log);

// Distinct with objects
interface Character {
    name: string;
    age: number;
}

const characters: Character[] = [
    {
        name: "Fredy",
        age: 38
    },
    {
        name: "Martha",
        age: 36
    },
    {
        name: "Ignacio",
        age: 38
    },
    {
        name: "Fredy",
        age: 38
    },
    {
        name: "Martha",
        age: 36
    },
    {
        name: "Marcos",
        age: 35
    },
    {
        name: "Ignacio",
        age: 37
    }
];

const characters$ = from(characters);

characters$.pipe(
    distinct(x => x.name)
).subscribe(console.log)