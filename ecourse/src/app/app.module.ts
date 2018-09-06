import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { SharedModule } from "./shared/shared.module";
import { CourseModule } from "./course/course.module";
import { CourseService } from "./course/course.service";
import { RouterModule } from "@angular/router";
import { CourseListComponent } from "./course/course-list/course-list.component";
import { AddCourseTdComponent } from "./course/add-course-td/add-course-td.component";
import { AddCourseRfComponent } from "./course/add-course-rf/add-course-rf.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    SharedModule,
    CourseModule,
    RouterModule.forRoot([
      { path: "list", component: CourseListComponent },
      { path: "add-td", component: AddCourseTdComponent },
      { path: "add-rf", component: AddCourseRfComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
