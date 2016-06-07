"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.moveTo = function (where) {
        console.log(where);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./pages/Main/main.html",
            styleUrls: ["./pages/Main/main.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map