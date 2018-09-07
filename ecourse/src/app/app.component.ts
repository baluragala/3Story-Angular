import { Component, ViewEncapsulation } from "@angular/core";
import { CourseService } from "./course/course.service";
import { of, fromEvent, pipe, from } from "rxjs";
import { map, filter } from "rxjs/operators";
@Component({
  selector: "eco-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      h1 {
        text-align: center;
        padding: 5px;
        background-color: antiquewhite;
      }

      h1 {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  // title = "ecourse";
  // constructor() {
  //   const p = fetch("https://api.github.com/users/baluragala").then(r =>
  //     r.json()
  //   );
  //   let o = from(p);
  //   o.subscribe(u => console.log(u));
  //   o.subscribe(u => console.log(u));
  //   o.subscribe(u => console.log(u));
  //   // of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  //   //   .pipe(
  //     map((v: number) => v * 2),
  //     filter((n: number) => n % 3 == 0)
  //   )
  //   .subscribe(function next(v) {
  //     console.log(v);
  //   });
  // //const doubler = map((v: number) => v * 2);
  // const doublerFilteredPipe = pipe(
  //   map((v: number) => v * 2),
  //   filter((n: number) => n % 3 == 0)
  // );
  // let subscription = doublerFilteredPipe(stream$).
  // let event$ = fromEvent(document.body, "mousemove");
  // let eventSubscription = event$.subscribe(function next(v) {
  //   console.log(v);
  // });
  // setTimeout(function() {
  //   eventSubscription.unsubscribe();
  // }, 20000);
  //}
}
