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
  courses: Array<ICourse>;

  constructor(
    public service: CourseService,
    @Inject("API_KEY") private key: string,
    @Inject("FACTORY_TOKEN") private token: string,
    private route: ActivatedRoute
  ) {
    console.log(this.key, token);
    console.log(this.route.snapshot.queryParams);
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
