import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";

import {MainPage} from "./pages/Main/main.component";
import {WorkersPage} from "./pages/Workers/workers.component";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS],
  template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
  { path: "/Main", component: MainPage, name: "Main", useAsDefault: true },
  { path: "/Workers", component: WorkersPage, name: "Workers", useAsDefault: false },
])
export class AppComponent {}