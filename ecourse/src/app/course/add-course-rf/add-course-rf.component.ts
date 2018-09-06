import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "eco-add-course-rf",
  templateUrl: "./add-course-rf.component.html",
  styleUrls: ["./add-course-rf.component.css"]
})
export class AddCourseRfComponent implements OnInit {
  addCourseForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor() {}

  ngOnInit() {
    this.addCourseForm = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30)
      ]),
      price: new FormControl(),
      modeOfDelivery: new FormControl(),
      category: new FormControl()
    });
    console.log(this.addCourseForm);
  }

  onSubmit() {
    this.isFormSubmitted = true;
  }
}
