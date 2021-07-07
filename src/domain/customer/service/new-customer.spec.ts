import { mock, verify, instance, anyFunction, anyNumber, anyOfClass, anyString, anything, between, objectContaining, when, strictEqual, deepEqual, reset } from 'ts-mockito';
import { CustomerRepositoryImpl } from "../repository/customer-repository-impl";
import { CustomerDTO } from "../../../out/dto/customer-dto";
import { Name } from '../model/name';
import { NewCustomer } from './new-customer';
import { NewCustomerService } from './new-customer-service';




describe('Add new user service tests', () => {

    const mockedCustomerRepository = mock(CustomerRepositoryImpl);
    const repository: CustomerRepositoryImpl = instance(mockedCustomerRepository);
    let service: NewCustomer = new NewCustomerService(repository);

    beforeEach(() => {
        reset(mockedCustomerRepository);
    });

    test('Should throw Error when saving a blank customer', () => {

        //given
        let blankName = new Name('');

        //when - then
        expect(() => service.createNamedCustomer(blankName)).toThrow('Cannot save an empty customer');
    });

    test('Should return id when saved', () => {

        //given
        const expectedId = 1;
        const expectedDTO = new CustomerDTO(-1, 'test');
        when(mockedCustomerRepository.add(objectContaining(expectedDTO))).thenReturn(1);

        //when
        const id: Number = service.createNamedCustomer(new Name('test'));

        verify(mockedCustomerRepository.add(objectContaining(expectedDTO))).times(1);
        expect(id).toEqual(expectedId);
    });

    test('Should throw Error when saving failed', () => {

        //given
        let blankName = new Name('test');
        when(mockedCustomerRepository.add(anything())).thenThrow(new Error('Connection is down'));

        //when - then
        expect(() => service.createNamedCustomer(blankName)).toThrow('The customer could not be saved');
    });

});
