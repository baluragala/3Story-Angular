import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseListItemComponent } from "./course-list-item/course-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { AddCourseTdComponent } from "./add-course-td/add-course-td.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCourseRfComponent } from "./add-course-rf/add-course-rf.component";
import { CourseService } from "./course.service";

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    AddCourseTdComponent,
    AddCourseRfComponent
  ],
  providers: [CourseService],
  exports: [CourseListComponent, AddCourseTdComponent, AddCourseRfComponent]
})
export class CourseModule {}
