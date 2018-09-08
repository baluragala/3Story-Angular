import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  config = [
    {
      type: "radio",
      label: "Full name",
      name: "name",
      placeholder: "Enter your name"
    },
    {
      type: "input",
      label: "Address",
      name: "Address",
      placeholder: "Enter your address"
    },
    {
      type: "select",
      label: "Favourite food",
      name: "food",
      options: ["Pizza", "Hot Dogs", "Knakworstje", "Coffee"],
      placeholder: "Select an option"
    },
    {
      label: "Submit",
      name: "submit",
      type: "button"
    }
  ];
}
