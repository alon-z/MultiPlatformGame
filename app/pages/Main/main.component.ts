import {Component} from "@angular/core";
import {Worker} from "../../share/Worker/Worker";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: "my-main",
    templateUrl: "./pages/Main/main.html",
    styleUrls: ["./pages/Main/main.css"]
})

export class MainPage {
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    moveTo(where: string) {
        console.log("Navigating to: " + where);
        this.router.navigate([where])
    }
}