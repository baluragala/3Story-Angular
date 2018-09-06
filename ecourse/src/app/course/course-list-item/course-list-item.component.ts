import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "eco-course-list-item",
  templateUrl: "./course-list-item.component.html",
  styleUrls: ["./course-list-item.component.css"]
})
export class CourseListItemComponent implements OnInit {
  @Input()
  course: ICourse = {
    title: "Angular 6",
    duration: 20,
    modeOfDelivery: "ONLINE",
    author: "ZEOLEARN",
    category: "Front End Development"
  };

  @Input()
  index;

  modeStyle: any = { "background-color": "lightgrey" };

  delayValue = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("promise resolved");
    }, 5000);
  });

  @Output()
  courseOpted: EventEmitter<ICourse> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  courseClicked(course: ICourse) {
    this.courseOpted.emit(course);
    this.modeStyle = {
      "background-color": "lightgreen",
      "font-weight": "bold"
    };
  }
}
