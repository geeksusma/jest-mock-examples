"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCustomerService = void 0;
var name_to_customer_mapper_1 = require("./name-to-customer-mapper");
var NewCustomerService = /** @class */ (function () {
    function NewCustomerService(repository) {
        this.repository = repository;
    }
    NewCustomerService.prototype.createNamedCustomer = function (name) {
        if (name.isEmpty()) {
            throw Error('Cannot save an empty customer');
        }
        this.repository.add(name_to_customer_mapper_1.NameToCustomerMapper.map(name));
        return 1;
    };
    return NewCustomerService;
}());
exports.NewCustomerService = NewCustomerService;
