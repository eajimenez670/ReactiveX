import { fromEvent, map, merge } from "rxjs";

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const click$ = fromEvent<PointerEvent>(document, "click");

merge(
  keyup$.pipe(map((val) => val.type)),
  click$.pipe(map((val) => val.type))
).subscribe(console.log);
