import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { DurationPipe } from "./duration.pipe";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  declarations: [NavbarComponent, DurationPipe, NotFoundComponent],
  exports: [NavbarComponent, DurationPipe, NotFoundComponent]
})
export class SharedModule {}
