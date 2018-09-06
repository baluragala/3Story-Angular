import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "eco-add-course-rf",
  templateUrl: "./add-course-rf.component.html",
  styleUrls: ["./add-course-rf.component.css"]
})
export class AddCourseRfComponent implements OnInit {
  addCourseForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.addCourseForm = new FormGroup({
    //   title: new FormControl("", [
    //     Validators.required,
    //     Validators.minLength(10),
    //     Validators.maxLength(30)
    //   ]),
    //   price: new FormControl(),
    //   modeOfDelivery: new FormControl(),
    //   category: new FormControl()
    // });
    // console.log(this.addCourseForm);

    this.addCourseForm = this.fb.group({
      title: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30)
        ]
      ],
      price: "",
      modeOfDelivery: "",
      category: ""
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;
  }

  load() {
    // this.addCourseForm.setValue({
    //   title: "Angular 6 by zeol",
    //   price: 100,
    //   modeOfDelivery: "ONLINE",
    //   category: "Mobile Development"
    // });

    this.addCourseForm.patchValue({
      titl: "Angular 6 by zeol",
      price: 100,
      modeOfDelivery: "ONLINE",
      category: "Mobile Development"
    });
  }
}
