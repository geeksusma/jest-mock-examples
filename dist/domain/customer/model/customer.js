"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this.id = id;
        this.name = name;
    }
    Customer.prototype.getId = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name.getName();
    };
    return Customer;
}());
exports.Customer = Customer;
