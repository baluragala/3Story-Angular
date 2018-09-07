import { Component, OnInit } from "@angular/core";
import { CourseService } from "../course.service";
import { ICourse } from "../ICourse";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "eco-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  course: ICourse;
  constructor(
    public service: CourseService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    console.log(route);
  }

  ngOnInit() {
    let id: string = this.route.snapshot.params["cid"];
    this.course = this.service.getCourseById(id);
  }

  goToCourses() {
    this.router.navigate(["/list"], { queryParams: { page: 1, limit: 10 } });
  }
}
