"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var WorkersPage = (function () {
    function WorkersPage(location) {
        this.location = location;
    }
    WorkersPage.prototype.Back = function () {
        this.location.back();
    };
    WorkersPage = __decorate([
        core_1.Component({
            selector: "my-workers",
            templateUrl: "./pages/Workers/workers.html",
            styleUrls: ["./pages/Workers/workers.css"]
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], WorkersPage);
    return WorkersPage;
}());
exports.WorkersPage = WorkersPage;
//# sourceMappingURL=workers.component.js.map