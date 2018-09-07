import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";

import { AddCourseTdComponent } from "./add-course-td/add-course-td.component";

@Injectable({
  providedIn: "root"
})
export class WorkInProgressGuard
  implements CanDeactivate<AddCourseTdComponent> {
  canDeactivate(
    component: AddCourseTdComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    let confirmation = confirm("Are you sure?");
    return confirmation;
  }
}
