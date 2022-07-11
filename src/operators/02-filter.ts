import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(0, 10).pipe(
//     filter((val) => val % 2 === 1)
// ).subscribe(console.log);

// range(0, 10)
//   .pipe(
//     filter((val, index) => {
//       console.log('Index',index);
//       return val % 2 === 1;
//     })
//   )
//   .subscribe(console.log);

interface Character {
  type: string;
  name: string;
}

var characters: Character[] = [
  {
    type: "Heroe",
    name: "Batman",
  },
  {
    type: "Heroe",
    name: "Hulk",
  },
  {
    type: "Villano",
    name: "Joker",
  },
];

let characters$ = from(characters);

const observer = {
  next: (val) => console.log("next", val),
  error: (err) => console.log("err", err),
  complete: () => console.log("complete"),
};

// characters$.pipe(filter((val) => val.type !== "Heroe")).subscribe(observer);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
    map((val) => val.code),
    filter((code) => code === "Enter")
);

keyUp$.subscribe(console.log);
