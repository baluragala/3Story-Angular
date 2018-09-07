import { TestBed, inject } from "@angular/core/testing";

import { CourseService } from "./course.service";

describe("Calc", () => {
  it("should add 2 numbers", () => {
    expect(2 + 2).toEqual(4);
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [CourseService]
  //   });
  // });
  // it('should be created', inject([CourseService], (service: CourseService) => {
  //   expect(service).toBeTruthy();
  // }));
});
