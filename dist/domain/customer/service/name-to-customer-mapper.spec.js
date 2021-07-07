"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_dto_1 = require("../../../out/dto/customer-dto");
var name_1 = require("../model/name");
var name_to_customer_mapper_1 = require("./name-to-customer-mapper");
describe('Name to Customer DTO mapper', function () {
    test('should map to expected when map', function () {
        //given
        var name = new name_1.Name("John Doe");
        //when
        var customer = name_to_customer_mapper_1.NameToCustomerMapper.map(name);
        //then
        expect(customer).toStrictEqual(new customer_dto_1.CustomerDTO(-1, "John Doe"));
    });
});
