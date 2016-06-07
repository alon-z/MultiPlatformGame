import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Worker} from "../../share/Worker/Worker";

@Component({
    selector: "my-workers",
    templateUrl: "./pages/Workers/workers.html",
    styleUrls: ["./pages/Workers/workers.css"]
})

export class WorkersPage {
    private location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    Back() {
        this.location.back();
    }
}