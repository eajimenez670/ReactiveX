import { combineLatest, fromEvent, map, merge } from "rxjs";

// First Example
// const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
// const click$ = fromEvent<PointerEvent>(document, "click");

// combineLatest(
//   keyup$.pipe(map((val) => val.key)),
//   click$.pipe(map((val) => val.x))
// ).subscribe(console.log);

// Second Example
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");

// Set Properties
inputEmail.placeholder = "yourEmail@gmail.com";

inputPass.placeholder = "**********";
inputPass.type = "password";

// Set DOM
document.querySelector("body").append(inputEmail, inputPass);

// Helper
const getValueInput = (ele: HTMLElement) =>
  fromEvent<KeyboardEvent>(ele, "keyup").pipe(
    map<KeyboardEvent, string>((val) => val.target["value"])
  );

combineLatest(getValueInput(inputEmail), getValueInput(inputPass)).subscribe(
  console.log
);
