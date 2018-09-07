import { CourseListComponent } from "./course-list/course-list.component";
import { AddCourseTdComponent } from "./add-course-td/add-course-td.component";
import { AddCourseRfComponent } from "./add-course-rf/add-course-rf.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";

import { Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { WorkInProgressGuard } from "./work-in-progress.guard";

export const COURSE_ROUTES: Routes = [
  { path: "list", component: CourseListComponent },
  {
    path: "add-td",
    component: AddCourseTdComponent,
    canActivate: [AuthGuard],
    canDeactivate: [WorkInProgressGuard]
  },
  { path: "add-rf", component: AddCourseRfComponent },
  { path: "detail/:cid", component: CourseDetailComponent }
];
