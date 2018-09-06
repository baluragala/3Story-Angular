import { Component, OnInit, Inject, InjectionToken } from "@angular/core";
import { ICourse } from "../ICourse";
import { CourseService } from "../course.service";
import { FACTORY_TOKEN } from "../course.module";

@Component({
  selector: "eco-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  lastOptedCourseName = "N/A";
  courses: Array<ICourse>;

  constructor(
    public service: CourseService,
    @Inject("API_KEY") private key: string,
    @Inject("FACTORY_TOKEN") private token: string
  ) {
    console.log(this.key, token);
  }

  ngOnInit() {
    this.courses = this.service.getCourses();
  }

  handleClick(e) {
    console.log(e);
    alert("clicked");
  }

  onCourseOpted(course: ICourse) {
    this.lastOptedCourseName = course.title;
  }
}
