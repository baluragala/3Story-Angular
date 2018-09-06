import { Component, ViewEncapsulation } from "@angular/core";
import { CourseService } from "./course/course.service";

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
  title = "ecourse";
}
