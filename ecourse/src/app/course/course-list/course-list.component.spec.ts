import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { CourseListComponent } from "./course-list.component";
import { Coursev2Service } from "../coursev2.service";
import { RouterModule, Route, Router, ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CourseListItemComponent } from "../course-list-item/course-list-item.component";
import { DurationPipe } from "../../shared/duration.pipe";
import { CourseService } from "../course.service";

describe("CourseListComponent", () => {
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        CourseListItemComponent,
        DurationPipe
      ],
      providers: [Coursev2Service, CourseService],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    }).compileComponents();
    route = TestBed.get(ActivatedRoute);
  }));

  it("should be created", () => {
    const component = new CourseListComponent(null, route);
    expect(component).toBeTruthy();
    expect(component.courses.length).toEqual(0);
    expect(component.lastOptedCourseName).toEqual("N/A");
  });

  it("lastOptedCourseName must be updated", () => {
    const component = new CourseListComponent(null, route);
    component.onCourseOpted({
      id: 1,
      title: "Angular 6-2",
      duration: 20,
      price: 100,
      modeOfDelivery: "ONLINE",
      author: "ZEOLEARN",
      category: "Front End Development"
    });
    expect(component.lastOptedCourseName).toEqual("Angular 6-2");
  });

  it("should render", () => {
    let fixture: ComponentFixture<
      CourseListComponent
    > = TestBed.createComponent(CourseListComponent);
    let instance = fixture.componentInstance;
    fixture.detectChanges();
    let h4 = fixture.nativeElement.querySelector("h4");
    console.log(h4);
    expect(h4.textContent).toEqual("Total Available Courses:0");
    instance.courses = [
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
      }
    ];
    fixture.detectChanges();
    expect(h4.textContent).toEqual("Total Available Courses:2");
    const items = fixture.nativeElement.querySelectorAll(
      "eco-course-list-item"
    );
    expect(items.length).toEqual(2);
  });
});
