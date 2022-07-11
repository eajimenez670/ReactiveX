import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((val) => {
      console.log("Antes", val);
      return 10;
    }),
    map((val) => val * 10),
    tap({
      next: (val) => console.log("Después", val),
      complete: () => console.log("Terminó"),
    })
  )
  .subscribe((val) => console.log("Subs", val));
