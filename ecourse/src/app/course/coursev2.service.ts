import { Injectable } from "@angular/core";
import { ICourse } from "./ICourse";

@Injectable({
  providedIn: "root"
})
export class Coursev2Service {
  private courses: Array<ICourse> = [
    {
      title: "Angular 6-2",
      duration: 20,
      price: 100,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "Front End Development"
    },
    {
      title: "React 16-2",
      duration: 24,
      price: 200,
      modeOfDelivery: "ONLINE",
      author: "KHUT",
      category: "Front End Development"
    },
    {
      title: "React 17-2",
      duration: 0,
      price: 0,
      modeOfDelivery: "ONLINE",
      author: "KHUT",
      category: "Front End Development"
    },
    {
      title: "Tensor Flow-2",
      duration: 20,
      price: 300,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "AI"
    },
    {
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
}
