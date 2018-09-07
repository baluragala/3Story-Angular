import { NgModule, InjectionToken } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseListItemComponent } from "./course-list-item/course-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { AddCourseTdComponent } from "./add-course-td/add-course-td.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCourseRfComponent } from "./add-course-rf/add-course-rf.component";
import { CourseService } from "./course.service";
import { Coursev2Service } from "./coursev2.service";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { RouterModule } from "@angular/router";

export const FACTORY_TOKEN = new InjectionToken<string>("FACTORY_TOKEN");

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    AddCourseTdComponent,
    AddCourseRfComponent,
    CourseDetailComponent
  ],
  providers: [
    { provide: CourseService, useClass: Coursev2Service },
    {
      provide: "API_KEY",
      useValue: "fds8678962uhfd"
    },
    {
      provide: "FACTORY_TOKEN",
      useFactory: function() {
        return { message: "token from factory" };
      }
    }
  ],
  exports: [
    CourseListComponent,
    AddCourseTdComponent,
    AddCourseRfComponent,
    CourseDetailComponent
  ]
})
export class CourseModule {}
