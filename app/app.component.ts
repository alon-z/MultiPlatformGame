import {Component} from "@angular/core";
import {Worker} from "./share/Worker/Worker";

@Component({
    selector: "my-app",
    templateUrl: "./pages/Main/main.html",
    styleUrls: ["./pages/Main/main.css"]
})

export class AppComponent {
    moveTo(where) {
        console.log(where);
    }
}