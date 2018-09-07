import { Injectable } from "@angular/core";
import { ICourse } from "./ICourse";
import { CourseModule } from "./course.module";
@Injectable()
export class CourseService {
  private courses: Array<ICourse> = [
    {
      title: "Angular 6",
      duration: 20,
      price: 100,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "Front End Development"
    },
    {
      title: "React 16",
      duration: 24,
      price: 200,
      modeOfDelivery: "ONLINE",
      author: "KHUT",
      category: "Front End Development"
    },
    {
      title: "React 17",
      duration: 0,
      price: 0,
      modeOfDelivery: "ONLINE",
      author: "KHUT",
      category: "Front End Development"
    },
    {
      title: "Tensor Flow",
      duration: 20,
      price: 300,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "AI"
    },
    {
      title: "Ionic 4",
      duration: 16,
      price: 80,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "Mobile Development"
    }
  ];
  constructor() {}

  getCourses() {
    return this.courses;
  }

  getCourseById(id: number): ICourse {
    const course = this.courses.find(c => c.id == id);
    return course;
  }
}
