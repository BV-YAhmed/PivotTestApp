define(["require", "exports", "flexmonster"], function (require, exports, Flexmonster) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PivotApp = /** @class */ (function () {
        function PivotApp() {
            var _this = this;
            this.pivot = new Flexmonster({
                container: "pivot",
                componentFolder: "../node_modules/flexmonster/",
                toolbar: true,
                licenseKey: "XXX",
                width: "100%",
                height: "500px",
                ready: function () { return _this.onPivotReady(); }
            });
        }
        PivotApp.prototype.onPivotReady = function () {
            this.pivot.load("https://cdn.flexmonster.com/reports/report.json");
        };
        return PivotApp;
    }());
    window.onload = function () {
        new PivotApp();
    };
});
//# sourceMappingURL=app.js.map