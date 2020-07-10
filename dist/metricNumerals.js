"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MetricNumerals_1 = require("./src/Humanizer/Numbers/MetricNumerals");
Number.prototype.toMetric = function () {
    return MetricNumerals_1.MetricNumerals.toMetric(this);
};
String.prototype.fromMetric = function () {
    return MetricNumerals_1.MetricNumerals.fromMetric(this);
};
//# sourceMappingURL=metricNumerals.js.map