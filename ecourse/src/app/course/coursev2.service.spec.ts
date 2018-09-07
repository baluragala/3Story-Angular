import { TestBed, inject, getTestBed } from "@angular/core/testing";
import { Coursev2Service } from "./coursev2.service";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ICourse } from "./ICourse";

describe("Coursev2Service", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: Coursev2Service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Coursev2Service]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = injector.get(Coursev2Service);
  });

  it("should be created", inject(
    [Coursev2Service],
    (service: Coursev2Service) => {
      expect(service).toBeTruthy();
    }
  ));

  describe("getCourses", () => {
    it("should return and observable array of Icourse", () => {
      const dummyCourses: Array<ICourse> = [
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

      service.getCourses().subscribe(courses => {
        expect(courses.length).toBe(2);
        expect(courses).toEqual(dummyCourses);
      });

      const req = httpMock.expectOne("http://localhost:3000/courses");
      expect(req.request.method).toBe("GET");
      req.flush(dummyCourses);
    });
  });
});
