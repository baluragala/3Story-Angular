import { Component, OnInit } from "@angular/core";

@Component({
  selector: "eco-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  lastOptedCourseName = "N/A";
  courses: Array<ICourse> = [
    {
      title: "Angular 6",
      duration: 20,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "Front End Development"
    },
    {
      title: "React 16",
      duration: 24,
      modeOfDelivery: "ONLINE",
      author: "KHUT",
      category: "Front End Development"
    },
    {
      title: "React 17",
      duration: 0,
      modeOfDelivery: "ONLINE",
      author: "KHUT",
      category: "Front End Development"
    },
    {
      title: "Tensor Flow",
      duration: 20,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "AI"
    },
    {
      title: "Ionic 4",
      duration: 16,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "Mobile Development"
    }
  ];

  constructor() {}

  ngOnInit() {}

  handleClick(e) {
    console.log(e);
    alert("clicked");
  }

  onCourseOpted(course: ICourse) {
    this.lastOptedCourseName = course.title;
  }
}
