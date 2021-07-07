import { anyNumber, instance, mock, reset, when } from 'ts-mockito';
import { CustomerDTO } from "../../../out/dto/customer-dto";
import { Customer } from '../model/customer';
import { Name } from '../model/name';
import { CustomerRepositoryImpl } from "../repository/customer-repository-impl";
import { GetCustomer } from './get-customer';
import { GetCustomersService } from './get-customer-service';



describe('Get customers service tests', () => {

    const mockedCustomerRepository = mock(CustomerRepositoryImpl);
    const repository: CustomerRepositoryImpl = instance(mockedCustomerRepository);
    let service: GetCustomer = new GetCustomersService(repository);

    beforeEach(() => {
        reset(mockedCustomerRepository);
    });

    test('Should return customer when foud', async () => {

        //given
        let customerId: Number = 1;
        let foundCustomer: CustomerDTO = new CustomerDTO(customerId, 'John Doe');
        when(mockedCustomerRepository.get(customerId)).thenReturn(foundCustomer);

        //when
        let customer: Customer | undefined = await service.byId(customerId);

        //then
        expect(customer).toEqual(new Customer(customerId, new Name('John Doe')));
    });

    test('Should return undefined when not found', async () => {

        //when
        let customer: Customer | undefined = await service.byId(12345);

        expect(customer).toBeUndefined();
    });

    test('Should throw Error when fetching failed', () => {

        //given
        when(mockedCustomerRepository.get(anyNumber())).thenThrow(new Error('Connection is down'));

        //when - then
        expect(() => service.byId(1)).toThrow('The customer could not be fetched');
    });


});
