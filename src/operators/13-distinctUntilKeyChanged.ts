import { distinctUntilKeyChanged, from } from 'rxjs';

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
        name: "Fredy",
        age: 38
    },
    {
        name: "Martha",
        age: 36
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
    distinctUntilKeyChanged('age')
).subscribe(console.log)