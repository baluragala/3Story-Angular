import { Injectable } from "@angular/core";
import { ICourse } from "./ICourse";
import { CourseModule } from "./course.module";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class CourseService {
  constructor(public http: HttpClient) {}

  getCourses() {
    return this.http.get<Array<ICourse>>("http://localhost:3000/courses");
  }

  getCourseById(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`http://localhost:3000/courses/${id}`);
  }

  addCourse(course: ICourse) {
    return this.http.post<ICourse>("http://localhost:3000/courses", course);
  }
}
