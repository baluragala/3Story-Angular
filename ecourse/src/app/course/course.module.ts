import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseListItemComponent } from "./course-list-item/course-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { AddCourseTdComponent } from "./add-course-td/add-course-td.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    AddCourseTdComponent
  ],
  exports: [CourseListComponent, AddCourseTdComponent]
})
export class CourseModule {}
