import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duration"
})
export class DurationPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg == "m") {
      return `${value * 60} mins`;
    } else {
      return `${value} hrs`;
    }
  }
}
