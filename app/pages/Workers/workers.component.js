"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Worker_1 = require("../../share/Worker/Worker");
var WorkersPage = (function () {
    function WorkersPage(location) {
        var _this = this;
        this.location = location;
        new Worker_1.Worker("test1");
        new Worker_1.Worker("test2");
        new Worker_1.Worker("test3");
        this.location = location;
        this.workerClassLink = new Worker_1.Worker();
        setTimeout(function () {
            _this.workerClassLink.getWorkers().getItem(2).dismiss();
        }, 5000);
    }
    WorkersPage.prototype.GoBack = function () {
        console.log("backed");
        this.location.back();
    };
    WorkersPage = __decorate([
        core_1.Component({
            selector: "my-workers",
            templateUrl: "./pages/Workers/workers.xml",
            styleUrls: ["./pages/Workers/workers.css"]
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], WorkersPage);
    return WorkersPage;
}());
exports.WorkersPage = WorkersPage;
//# sourceMappingURL=workers.component.js.map