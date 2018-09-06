import { Component, OnInit } from "@angular/core";
import { ICourse } from "../ICourse";
import { CourseService } from "../course.service";

@Component({
  selector: "eco-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  lastOptedCourseName = "N/A";
  courses: Array<ICourse>;

  constructor(public service: CourseService) {}

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
