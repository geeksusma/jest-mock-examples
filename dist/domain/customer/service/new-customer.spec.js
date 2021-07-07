"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name_1 = require("../model/name");
var ts_mockito_1 = require("ts-mockito");
var customer_repository_impl_1 = require("../repository/customer-repository-impl");
var customer_dto_1 = require("../../../out/dto/customer-dto");
jest.mock('../repository/customer-repository-impl', function () {
    return {
        CustomerRepositoryImpl: jest.fn().mockImplementation(function () {
            return {
                add: function () { 1; },
            };
        })
    };
});
describe('service test', function () {
    /*
        test('Should throw Error when saving a blank customer', () => {
    
            //given
            let blankName = new Name('');
            let service: NewCustomer = new NewCustomerService();
        
    
            //when - then
            expect(() => service.createNamedCustomer(blankName)).toThrow('Cannot save an empty customer');
        });*/
    test('Should return id when saved', function () {
        //setup
        var expectedId = 1;
        var mockedRepo = ts_mockito_1.mock(customer_repository_impl_1.CustomerRepositoryImpl);
        //given
        var customerName = new name_1.Name('test');
        //let service: NewCustomer = new NewCustomerService(instance(repo));
        //when 
        //let id: Number = service.createNamedCustomer(customerName);
        var repo = ts_mockito_1.instance(mockedRepo);
        repo.add(new customer_dto_1.CustomerDTO(-1, 'tetst'));
        //then
        ts_mockito_1.verify(mockedRepo.add(new customer_dto_1.CustomerDTO(-1, 'test'))).called();
    });
});
