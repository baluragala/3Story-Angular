import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { DurationPipe } from "./duration.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, DurationPipe],
  exports: [NavbarComponent, DurationPipe]
})
export class SharedModule {}
