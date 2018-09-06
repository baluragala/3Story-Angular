import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseListItemComponent } from "./course-list-item/course-list-item.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CourseListComponent, CourseListItemComponent],
  exports: [CourseListComponent]
})
export class CourseModule {}
