import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "eco-add-course-td",
  templateUrl: "./add-course-td.component.html",
  styleUrls: ["./add-course-td.component.css"]
})
export class AddCourseTdComponent implements OnInit {
  title;
  price;
  modeOfDelivery;
  category;

  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.dir(f);
  }
}
