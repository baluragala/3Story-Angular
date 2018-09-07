import { Component, OnInit, Inject, InjectionToken } from "@angular/core";
import { ICourse } from "../ICourse";
import { CourseService } from "../course.service";
import { FACTORY_TOKEN } from "../course.module";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "eco-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  lastOptedCourseName = "N/A";
  courses: Array<ICourse> = [];

  constructor(public service: CourseService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.queryParams);
  }

  ngOnInit() {
    this.service.getCourses().subscribe(courses => (this.courses = courses));
  }

  handleClick(e) {
    console.log(e);
    alert("clicked");
  }

  onCourseOpted(course: ICourse) {
    this.lastOptedCourseName = course.title;
  }
}
