"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameToCustomerMapper = void 0;
var customer_dto_1 = require("../../../out/dto/customer-dto");
var NameToCustomerMapper = /** @class */ (function () {
    function NameToCustomerMapper() {
    }
    NameToCustomerMapper.map = function (name) {
        return new customer_dto_1.CustomerDTO(-1, name.getName());
    };
    return NameToCustomerMapper;
}());
exports.NameToCustomerMapper = NameToCustomerMapper;
