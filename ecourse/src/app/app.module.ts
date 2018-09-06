import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { SharedModule } from "./shared/shared.module";
import { CourseModule } from "./course/course.module";
import { CourseService } from "./course/course.service";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, SharedModule, CourseModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
