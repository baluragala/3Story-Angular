import { CourseListComponent } from "./course-list/course-list.component";
import { AddCourseTdComponent } from "./add-course-td/add-course-td.component";
import { AddCourseRfComponent } from "./add-course-rf/add-course-rf.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";

export const COURSE_ROUTES = [
  { path: "list", component: CourseListComponent },
  { path: "add-td", component: AddCourseTdComponent },
  { path: "add-rf", component: AddCourseRfComponent },
  { path: "detail/:cid", component: CourseDetailComponent }
];
