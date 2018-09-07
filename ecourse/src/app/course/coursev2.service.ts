import { Injectable } from "@angular/core";
import { ICourse } from "./ICourse";

@Injectable({
  providedIn: "root"
})
export class Coursev2Service {
  private courses: Array<ICourse> = [
    {
      id: 1,
      title: "Angular 6-2",
      duration: 20,
      price: 100,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "Front End Development"
    },
    {
      id: 2,
      title: "React 16-2",
      duration: 24,
      price: 200,
      modeOfDelivery: "ONLINE",
      author: "KHUT",
      category: "Front End Development"
    },
    {
      id: 3,
      title: "React 17-2",
      duration: 0,
      price: 0,
      modeOfDelivery: "ONLINE",
      author: "KHUT",
      category: "Front End Development"
    },
    {
      id: 4,
      title: "Tensor Flow-2",
      duration: 20,
      price: 300,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "AI"
    },
    {
      id: 5,
      title: "Ionic 4-2",
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
