import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Worker} from "../../share/Worker/Worker";

@Component({
    selector: "my-workers",
    templateUrl: "./pages/Workers/workers.xml",
    styleUrls: ["./pages/Workers/workers.css"]
})

export class WorkersPage {
    public workerClassLink: Worker;

    constructor( private location: Location ) {
        new Worker("test1");
        new Worker("test2");
        new Worker("test3");

        this.location = location;
        this.workerClassLink = new Worker();

        setTimeout(() => {
            this.workerClassLink.getWorkers().getItem(2).dismiss();
        }, 5000)
    }

    GoBack() {
        console.log("backed");
        this.location.back();
    }
}